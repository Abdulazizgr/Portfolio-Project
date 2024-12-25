import { Schema, model, models } from "mongoose";

const BookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Book title is required"],
    },
    author: {
      type: String,
      required: [true, "Author name is required"],
    },
    isbn: {
      type: String,
      unique: true,
    },
    publishDate: {
      type: Date,
    },
    genre: [String],
    coverImage: String,
    description: String,
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    averageRating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Book = models.Book || model("Book", BookSchema);


export default {Book };