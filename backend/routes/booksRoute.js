import express from "express"
import { Book } from "../models/bookModel.js"

const router = express.Router()

// Route to save a book:

router.post('/', async (request, response) => {
    try {
        // validation for the entered book
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({ message: "Enter all required fields" })
        }

        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear
        }

        const book = await Book.create(newBook)
        return response.status(201).send(book)

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })

    }

})

// Route to get all books:

router.get('/', async (request, response) => {
    try {
        const books = await Book.find({})
        return response.status(200).json({
            books: books
        })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})

// Route to get a book by id:

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const book = await Book.findById(id)
        return response.status(200).json(book)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})

// Route to update a book by id

router.put('/:id', async (request, response) => {
    try {
        // validation for the entered book
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({ message: "Enter all required fields" })
        }
        const { id } = request.params
        const result = await Book.findByIdAndUpdate(id, request.body)

        if (!result) {
            return response.status(404).send({ message: "Book not found" })
        }

        return response.status(200).send({ message: "Book updated successfully" })

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})

// Route to delete a book by id

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const result = await Book.findByIdAndDelete(id)

        if (!result) {
            return response.status(404).send({ message: "Book not found" })
        }

        return response.status(200).send({ message: "Book deleted successfully" })

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})

export default router