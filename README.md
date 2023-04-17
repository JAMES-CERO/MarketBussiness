# Market Store 

this project is built as a commercail webpage.

## Features

You will be able to surf betwwen the page
buy & check the characteristics of each item

### Routes 

|    Method    |     Path                     |    Purpouse                                         |
| :---         |     :---:                    |          ---:                                       |
|    GET       |      /                       |  Home page                                          |
|    GET       |   /designs                    |  Places index page                                  |
|    POST      |   /designs                    |  Create new item                                   |
|    GET       |   /designs/new                |  Form page for creating a new item                 |
|    GET       |   /designs/:id                |  Details about a particular item                   |
|    PUT       |   /designs/:id                |  Update a particular item                          |
|    GET       |   /designs/:id/edit/          |  Form page for editing an existing item            |
|    DELETE    |   /designs/:id                |  Delete a particular item                          |
|    POST      |   /designs/:id/review           |  Create a review (comment) about a particular item   |
|    DELETE    |  ###/designs/:id/review/:reviewId |  Delete a review (comment) about a particular item   |
|    GET       |       *                      |   404 page (matches any route not defined above)    |

## Designs

| key      | Data - type  |
|   :---:  |    :---:     | 
| id       | Odject ID    |
| Name     | String       |
| Picture  | String       |
| About    | String       |

