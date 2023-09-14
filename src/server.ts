import {fastify} from 'fastify'
import { createTranscriptionRoute } from './routes/create-transcription'
import { getAllPromptsRoute } from './routes/get-all-prompts'
import { uploadVideoRoute } from './routes/upload-video'
import { generateAiCompletionRoute } from './routes/generate-ai-compilation'

const app = fastify()


app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAiCompletionRoute)

app.listen({
  port: 3000,
  host: '0.0.0.0'
}, () => {
  console.log(`Server listening at http://localhost:3000`)
})
