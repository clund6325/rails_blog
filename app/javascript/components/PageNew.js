import React from 'react';

const PageNew = ({page}) => {
  const {title, body, author} = page
  const defaultTitle = title ? title : ""
  const defaultBody = body ? body : ""
  const defaultAuthor = author ? author : ""
  return(
    <>
      <h1>New Page</h1>
      <form action='/pages' method="post">
        <input
          placeholder="title"
          type='text'
          defaultValue={defaultTitle}
          name="page[title]"
        />
        <input
        placeholder="author"
        type='text'
        defaultValue={defaultAuthor}
        name="page[author]"
      />
      <input
          placeholder="body"
          type='text'
          defaultValue={defaultBody}
          name="page[body]"
        />
      </form>

    </>
  )
}

export default PageNew; 