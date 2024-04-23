import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TextFieldModule } from '@angular/cdk/text-field';

interface Book {
  id: number;
  title: string;
  description: string;
  author: string;
  numberOfRatings: number;
  rating: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, TextFieldModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Домашна работа № 2';

  index: number = 0;

  selectedBookPropertyTitle = false;
  selectedBookPropertyDesc = false;
  selectedBookPropertyAuthor = false;

  endOfReview = false;

  books = [
    {
      title: 'Game of Thrones',
      description:
        'An epic fantasy saga depicting the struggle for the throne of the Western continent.',
      author: 'George R. R. Martin',
      numberOfRatings: 0,
      rating: 0,
    },
    {
      title: 'Lord of the Flies',
      description:
        'A novel revealing the psychological aspects of individual and group behavior in crisis situations.',
      author: 'William Golding',
      numberOfRatings: 0,
      rating: 0,
    },
    {
      title: '1984',
      description:
        'A dystopian novel depicting a totalitarian society and its methods of control.',
      author: 'George Orwell',
      numberOfRatings: 0,
      rating: 0,
    },
    {
      title: 'The War of the Worlds',
      description:
        'A science fiction novel depicting an invasion of aliens with technological superiority over humanity.',
      author: 'H. G. Wells',
      numberOfRatings: 0,
      rating: 0,
    },
    {
      title: 'The Hobbit',
      description:
        'An adventure fantasy story about a hobbit who embarks on an epic journey with a group of dwarves and the wizard Gandalf.',
      author: 'J. R. R. Tolkien',
      numberOfRatings: 0,
      rating: 0,
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      description:
        'The first book in the series about the young wizard Harry Potter, who discovers the world of magic and adventures.',
      author: 'J. K. Rowling',
      numberOfRatings: 0,
      rating: 0,
    },
    {
      title: 'Murder on the Orient Express',
      description:
        'A classic detective novel in which the famous detective Hercule Poirot investigates a murder on the Orient Express.',
      author: 'Agatha Christie',
      numberOfRatings: 0,
      rating: 0,
    },
    {
      title: 'Via Dolorosa',
      description:
        'A historical novel recounting the life and sufferings of Christ during his crucifixion.',
      author: 'Maria Schrader',
      numberOfRatings: 0,
      rating: 0,
    },
    {
      title: 'Harry Potter and the Prisoner of Azkaban',
      description:
        'The third book in the Harry Potter series, following his adventures at the magical school of Hogwarts.',
      author: 'J. K. Rowling',
      numberOfRatings: 0,
      rating: 0,
    },
    {
      title: 'The War of the Worlds',
      description:
        'A famous science fiction novel in which humanity faces off against aliens with terrifying technologies and strategies to conquer Earth.',
      author: 'H. G. Wells',
      numberOfRatings: 0,
      rating: 0,
    },
  ];

  addRating(rating: number) {
    this.books[this.index].rating += rating;
    this.books[this.index].numberOfRatings++;
    if (this.index < this.books.length - 1) this.index++;
    else this.endOfReview = true;
    this.resetEditFunctionality();
  }

  resetEditFunctionality() {
    this.selectedBookPropertyTitle = false;
    this.selectedBookPropertyDesc = false;
    this.selectedBookPropertyAuthor = false;
  }

  calculateBookRating() {
    const numberOfRatings =
      this.books[this.index].numberOfRatings === 0
        ? 1
        : this.books[this.index].numberOfRatings;
    return (this.books[this.index].rating / numberOfRatings).toFixed(2);
  }

  editBookProperty(propertyName: keyof Book) {
    switch (propertyName) {
      case 'title':
        this.selectedBookPropertyTitle = true;
        break;
      case 'description':
        this.selectedBookPropertyDesc = true;
        break;
      case 'author':
        this.selectedBookPropertyAuthor = true;
        break;
    }
  }

  startOver() {
    this.index = 0;
    this.endOfReview = false;
  }
}
