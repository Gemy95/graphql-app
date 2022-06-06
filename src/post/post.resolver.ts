import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post, NewPost, UpdatePost } from 'src/graphql';

@Resolver('Post')
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query('posts')
  async posts() {
    return this.postService.posts();
  }

  @Query('post')
  async post(@Args('id') args: string) {
    return this.postService.post(args);
  }

  @Mutation('createPost')
  async create(@Args('input') args: NewPost) {
    return this.postService.createPost(args);
  }

  @Mutation('updatePost')
  async update(@Args('input') args: UpdatePost) {
    return this.postService.updatePost(args);
  }

  @Mutation('deletePost')
  async delete(@Args('id') args: string) {
    return this.postService.deletePost(args);
  }
  
}


//  mutation generatePost{
//       createPost(input:{
//          title:"A new second title"
//          content:"A new second content"
//        }){
//          id
//          title
//          content
//          published
//          created_at
//          updated_at
//        }
//    }
  
  
//    query GetPosts{
//        posts{
//          id
//          title
//          content
//          published
//          created_at
//          updated_at
//        }
//    }
  

// query GetPost{
//   post(id:1){
//     id
//     title
//     content
//     published
//   }
// }


// mutation updatePost{
//   updatePost(input:{
//     id:1,
//     published:true
//   }){
//     id
//     title
//     content
//     published
//   }
// }


// mutation deletePost{
//   deletePost(id:1){
//     id
//     title
//     content
//     published
//   }
// }