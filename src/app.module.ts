import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

// const mocks = {
//   Int: () => 6,
//   Float: () => 22.1,
//   String: () => 'Hello',
// };
@Module({
  imports: [    
    GraphQLModule.forRoot<ApolloDriverConfig>({     
      driver: ApolloDriver,
      debug: true,
      playground: true,
      typePaths: ['./**/*.graphql'],
      mocks:true,
    }),
    PostModule,
    
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
