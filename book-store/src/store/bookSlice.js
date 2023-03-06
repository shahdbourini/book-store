import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk('book/getBooks', async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const res = await fetch('http://localhost:3005/books');
    const data = await res.json();
    return data
  }
  catch (err) {
    return rejectWithValue(err.message)

  }
});

/* insert book */
export const insertBook = createAsyncThunk('book/insertBook', async (book, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const res = await fetch('http://localhost:3005/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(book),
    });
    const data = await res.json();
    return data
  }
  catch (err) {
    return rejectWithValue(err.message);
  }
});

/* delete book */
export const deleteBook = createAsyncThunk('book/deleteBook', async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const res = await fetch(`http://localhost:3005/books/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });

    return id
  }
  catch (err) {
    return rejectWithValue(err.message);
  }
});




const bookSlice = createSlice({
  name: 'books',
  initialState: { books: [], isLoading: false, error: null, info: [] },

  reducers: {
    readBook: (state, action) => {
      state.info = state.books.filter((book) => book.id === action.payload);
      // console.log(state.info);
    },
  },

  extraReducers: {
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
      // console.log(action);

    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
      // console.log(action);
    },
    [getBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.log(action);
    },

    /*insert book */
    [insertBook.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
      console.log(action);
    },

    [insertBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books.push(action.payload);
      console.log(action);
    },
    [insertBook.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.log(action);
    },

    /* delete book */
    [deleteBook.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },

    [deleteBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = state.books.filter((book) => {
        return book.id !== action.payload;
      })
      state.info = state.info.filter((book) => {
        return book.id !== action.payload;
      })
    },

    [deleteBook.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;

    },
  }
});


export const { readBook } = bookSlice.actions;

export default bookSlice.reducer;