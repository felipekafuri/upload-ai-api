import {fastify} from 'fastify'
import { createTranscriptionRoute } from './routes/create-transcription'
import { getAllPromptsRoute } from './routes/get-all-prompts'
import { uploadVideoRoute } from './routes/upload-video'
import { generateAiCompletionRoute } from './routes/generate-ai-compilation'

const app = fastify()

app.register(fastifyCors,{
  origin: '*'
})
app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAiCompletionRoute)



app.listen({
  port: 3000,
}, () => {
  console.log(`Server listening at http://localhost:3000`)
})
function fastifyCors(instance: FastifyInstance<RawServerDefault, IncomingMessage, ServerResponse<IncomingMessage>, FastifyBaseLogger, FastifyTypeProvider>, opts: FastifyPluginOptions, done: (err?: Error | undefined) => void): void {
  throw new Error('Function not implemented.')
}

