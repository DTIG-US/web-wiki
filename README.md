# web-wiki

# Angular Web Wiki App

This repository contains the source code for an Angular web application that serves as a wiki. Users can navigate through various posts and view detailed information for each post.

## Table of Contents
- [Introduction](#introduction)
- [Components](#components)
- [Testing](#testing)
- [Usage](#usage)

## Introduction

The Angular Web Wiki App is built using Angular and utilizes a service (`PostService`) to retrieve and display posts. Each post is displayed as a link, and users can click on a link to view detailed information about a specific post.

## Components

### WebWikiComponent

The `WebWikiComponent` is the main component responsible for rendering the web wiki interface. It includes a navigation section that lists all available posts. The component fetches the posts from the `PostService` during initialization.

#### Example Usage:

```html
<div class="container-fluid wiki">
    <div class="row">
        <div class="col-md-12 mt-5 px-5">
            <ul class="">
                <li 
                    *ngFor="let post of posts"
                    class="">
                    <a routerLink="/wiki/{{post.fileName}}">{{ post.fileName }}</a>
                </li>
            </ul>
        </div>
    </div>
</div>
```

### Testing

The application includes unit tests to ensure the proper functionality of the `WebWikiComponent`. The testing file (`web-wiki.component.spec.ts`) uses Angular's testing utilities for component testing.

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebWikiComponent } from './web-wiki.component';

describe('WebWikiComponent', () => {
  let component: WebWikiComponent;
  let fixture: ComponentFixture<WebWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebWikiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application using `ng serve`.
4. Open a web browser and navigate to `http://localhost:4200/`.

Feel free to explore and modify the code to suit your needs.
