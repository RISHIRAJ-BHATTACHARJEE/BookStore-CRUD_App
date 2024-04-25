import express from "express";
import { Book } from "../models/models.js";

const router = express.Router();

//Route to Save a new Book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({ message: "All fields are required" });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);

    return res.status(201).send(book);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

//Route to get all books
router.get("/", async (req, res) => {
  try {
    const allBooks = await Book.find();

    res.status(200).send({
      count: allBooks.length,
      data: allBooks,
    });
  } catch (error) {
    console.log(error);
    res.status(205).send({ message: error.message });
  }
});

//Route to Get One Book by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    res.status(200).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(403).send({ message: error.message });
  }
});

//Route to Update a Book
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(300).send({ message: "All fields are required" });
    }

    const { id } = req.params;

    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(300).send({ message: "Book not found" });
    }

    return res.status(200).send({ message: "Book updated successfully" });
  } catch (error) {
    console.log(error.message);

    res.status(403).send({ message: error.message });
  }
});

//Route to delete a book
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      res.status(301).send({ message: "Book not Found" });
    }
    res.status(200).send({ message: "Book deleted successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(401).send({ message: err.message });
  }
});

export default router;
