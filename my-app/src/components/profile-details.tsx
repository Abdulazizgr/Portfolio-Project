"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Edit2, Save, X } from 'lucide-react'

interface ProfileDetails {
  name: string
  username: string
  email: string
  bio: string
  location: string
  website: string
  avatar: string
  joinDate: string
  stats: {
    reviews: number
    followers: number
    following: number
    booksRead: number
  }
}

interface ProfileDetailsProps {
  profile: ProfileDetails
  onSave: (profile: ProfileDetails) => void
}

export function ProfileDetails({ profile: initialProfile, onSave }: ProfileDetailsProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState(initialProfile)

  const handleSave = () => {
    onSave(profile)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setProfile(initialProfile)
    setIsEditing(false)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="relative h-48 bg-gradient-to-r from-[#4527A0] to-purple-600 rounded-t-lg">
        <div className="absolute -bottom-16 left-8">
          <div className="relative w-32 h-32 rounded-full border-4 border-white overflow-hidden">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              className="object-cover"
            />
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

      <div className="pt-20 px-8 pb-8">
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold">{profile.stats.reviews}</div>
            <div className="text-gray-600">Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{profile.stats.followers}</div>
            <div className="text-gray-600">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{profile.stats.following}</div>
            <div className="text-gray-600">Following</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{profile.stats.booksRead}</div>
            <div className="text-gray-600">Books Read</div>
          </div>
        </div>

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Location</label>
              {isEditing ? (
                <Input
                  value={profile.location}
                  onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                />
              ) : (
                <p>{profile.location}</p>
              )}
            </div>
            <div>
              <label className="text-sm text-gray-600">Website</label>
              {isEditing ? (
                <Input
                  value={profile.website}
                  onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                />
              ) : (
                <a href={profile.website} className="text-[#4527A0] hover:underline">
                  {profile.website}
                </a>
              )}
            </div>
            <div>
              <label className="text-sm text-gray-600">Email</label>
              {isEditing ? (
                <Input
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                />
              ) : (
                <p>{profile.email}</p>
              )}
            </div>
            <div>
              <label className="text-sm text-gray-600">Joined</label>
              <p>{profile.joinDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

