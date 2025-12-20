import { Router } from 'express'
import { GetArticles  } from './articles.service.js'

const router = Router()

const getArticles = new GetArticles()

router.post('/', (req, res) => {
    const article = getArticles.createArticle(req)
})

export const artRouter = router