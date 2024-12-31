"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Edit2, Save, X } from "lucide-react";

// Component to manage and display user profile details
export function ProfileDetails({ profile: initialProfile, onSave }: ProfileDetailsProps) {
  const [isEditing, setIsEditing] = useState(false); // Tracks edit mode state
  const [profile, setProfile] = useState(initialProfile); // Manages profile data state

  // Save changes and exit edit mode
  const handleSave = () => {
    onSave(profile);
    setIsEditing(false);
  };

  // Revert changes and exit edit mode
  const handleCancel = () => {
    setProfile(initialProfile);
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Header with avatar and edit button */}
      <div className="relative h-48 bg-gradient-to-r from-[#2f5583] to-blue-300 rounded-t-lg">
        <div className="absolute -bottom-16 left-8">
          <div className="relative w-32 h-32 rounded-full border-4 border-white overflow-hidden">
            <Image src={profile.avatar} alt={profile.name} fill className="object-cover" />
          </div>
        </div>
        {!isEditing && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={() => setIsEditing(true)}
          >
            <Edit2 className="w-5 h-5" />
          </Button>
        )}
      </div>

      {/* Profile content */}
      <div className="pt-20 px-8 pb-8">
        {/* Display/edit name and username */}
        <div className="flex justify-between items-start mb-6">
          <div className="space-y-1">
            {isEditing ? (
              <Input
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="text-2xl font-bold"
              />
            ) : (
              <h1 className="text-2xl font-bold">{profile.name}</h1>
            )}
            <p className="text-gray-600">@{profile.username}</p>
          </div>

          {isEditing && (
            <div className="flex gap-2">
              <Button onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" onClick={handleCancel}>
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
            </div>
          )}
        </div>

        {/* Profile stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {["reviews", "followers", "following", "booksRead"].map((statKey) => (
            <div className="text-center" key={statKey}>
              <div className="text-2xl font-bold">{profile.stats[statKey]}</div>
              <div className="text-gray-600">{statKey.replace(/([A-Z])/g, " $1")}</div>
            </div>
          ))}
        </div>

        {/* Profile bio and details */}
        <div className="space-y-4">
          {isEditing ? (
            <Textarea
              value={profile.bio}
              onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
              placeholder="Tell us about yourself..."
              className="min-h-[100px]"
            />
          ) : (
            <p className="text-gray-700">{profile.bio}</p>
          )}

          {/* Location, website, email, and join date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["location", "website", "email"].map((fieldKey) => (
              <div key={fieldKey}>
                <label className="text-sm text-gray-600">
                  {fieldKey.charAt(0).toUpperCase() + fieldKey.slice(1)}
                </label>
                {isEditing ? (
                  <Input
                    value={profile[fieldKey]}
                    onChange={(e) => setProfile({ ...profile, [fieldKey]: e.target.value })}
                  />
                ) : fieldKey === "website" ? (
                  <a href={profile[fieldKey]} className="text-[#4527A0] hover:underline">
                    {profile[fieldKey]}
                  </a>
                ) : (
                  <p>{profile[fieldKey]}</p>
                )}
              </div>
            ))}
            <div>
              <label className="text-sm text-gray-600">Joined</label>
              <p>{profile.joinDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
