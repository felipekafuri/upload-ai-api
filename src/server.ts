import {fastify} from 'fastify'
import { createTranscriptionRoute } from './routes/create-transcription'
import { getAllPromptsRoute } from './routes/get-all-prompts'
import { uploadVideoRoute } from './routes/upload-video'

const app = fastify()


app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)

app.listen({
  port: 3000,
  host: '0.0.0.0'
}, () => {
  console.log(`Server listening at http://localhost:3000`)
})
