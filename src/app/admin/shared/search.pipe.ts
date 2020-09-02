import {Pipe, PipeTransform} from '@angular/core';
import {IPost} from '../../shared/interfaces';

@Pipe({name: 'searchPosts'})
export class SearchPipe implements PipeTransform {
  transform(posts: IPost[], searchStr: string): IPost[] {
    if (!searchStr.trim()) {
      return posts;
    }

    return posts.filter((post) => post.title.toLowerCase().includes(searchStr.toLowerCase())
      || post.author.toLowerCase().includes(searchStr.toLowerCase()));
  }
}
