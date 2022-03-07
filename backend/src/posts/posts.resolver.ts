import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma.service';
import { Post } from './models/post.model';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Post])
  async getPosts() {
    return this.prisma.post.findMany();
  }

  @Query(() => [Post])
  async getPostById(@Args('id') postId: number) {
    return this.prisma.post.findMany({
      where: { id: postId },
    });
  }

  @Query(() => [Post])
  async getPostByIsPublished() {
    return this.prisma.post.findMany({
      where: { isPublished: true },
    });
  }

  @Mutation(() => Post)
  async createPost(
    @Args('title') title: string,
    @Args('content') content: string,
  ) {
    return this.prisma.post.create({ data: { title, content } });
  }
}
