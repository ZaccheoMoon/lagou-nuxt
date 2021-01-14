<template>
  <div class="profile-page">

    <div class="user-info">
      <div class="container">
        <div class="row">

          <div class="col-xs-12 col-md-10 offset-md-1">
            <img src="http://i.imgur.com/Qr71crq.jpg" class="user-img" />
            <h4>Eric Simons</h4>
            <p>
              Cofounder @GoThinkster, lived in Aol's HQ for a few months, kinda looks like Peeta from the Hunger Games
            </p>
            <button class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-plus-round"></i>
              &nbsp;
              Follow Eric Simons 
            </button>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link active" href="">My Articles</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">Favorited Articles</a>
              </li>
            </ul>
          </div>

          <div class="article-preview" v-for="article in articles" :key="article.slug">
            <div class="article-meta">
              <nuxt-link :to="{ name: 'profile', params: { username: article.author.username }}">
                <img :src="article.author.image" />
              </nuxt-link>
              <div class="info">
                <nuxt-link class="author" :to="{ name: 'profile', params: { username: article.author.username }}">{{ article.author.username }}</nuxt-link>
                <span class="date">{{ article.createdAt | date('MMM DD,YYYY') }}</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link :to="{ name: 'article', params: { slug: article.slug }}" class="preview-link">
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { getArticles } from '@/api/article'

export default {
  name: 'ProfileIndex',
  middleware: ['authenticated'],
  async asyncData () {
    const { data } = await getArticles()
    return {
      articles: data.articles,
      articlesCount: data.articlesCount
    }
  },
}
</script>

<style>

</style>