import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer gyQyU5QvEE3cu6P2-trx0d2v5pMGG4smE_WaQCNkzxoUQFvlwlGyvwqMfIxU6v2jjTd4yJJHZCeMwo2APbmdl-ZE4ZMkbirhqAneREpKJMh5xLLQk5f8pB2ZT7c7YnYx'
  }
})
