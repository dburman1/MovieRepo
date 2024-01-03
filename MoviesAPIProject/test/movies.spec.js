const mongoose = require('mongoose')
const databaseName = 'MovieDB'
const express = require('express')
const Movie = require('../src/models/movie')
const request = require("supertest");
const router = require('../src/routes/router')
const app = new express();
app.use('/', router);
jest.useRealTimers();

describe("GET /movies", () => {
it('fetch movie lists', async done => {
    try{
        const res = await request(app).get('/movies')
        const response = await Movie.find();
        //expect(response.status).toEqual(200);
        return;
    } catch(error){
        return;
    }
  })
});

describe("DELETE /movies/:id", () => {
    it('fetch movie lists', async done => {
        try{
            const res = await request(app).get('/movies/1')
            const response = await Movie.find()
            return;
        } catch(error){
            return;
        }
      })
    });