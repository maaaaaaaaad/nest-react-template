import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = app.get(ConfigService)
  const port = config.get('SERVER_PORT')
  app.setGlobalPrefix('api')

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('APP')
    .setDescription('API documentation')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)

  app.enableCors()
  await app.listen(port)
}
bootstrap()
