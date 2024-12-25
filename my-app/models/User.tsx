
import { Schema, model, models } from "mongoose"

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "Username already exists"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  profileImage: {
    type: String,
  },
  bio: {
    type: String,
    maxlength: [500, "Bio cannot be more than 500 characters"],
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review"
    }
  ],
  readingLists: [
    {
      name: String,
      books: [
        {
          type: Schema.Types.ObjectId,
          ref: "Book"
        }
      ]
    }
  ],
  favoriteBooks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book"
    }
  ],
  following: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  followers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
}, {
  timestamps: true,
});


const User = models.User || model("User", UserSchema);



export  { User };