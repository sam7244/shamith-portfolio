import sanityClient from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import { type } from "os";

export const client = createClient({
  projectId: "6uwhnivu",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skgG6KNEm1LjAh0vRUwcZq6vOTfmAoZKztXcoZyN74DuuHv4XLdqZdhiyhOpFqLhk20DWntweRL2aAA9q1eZWEdxkWi6mkFEV6EsWEDIJugB63Q2PFpCKYwj0IZqBhnjGa73diVcCAcYvEWsjOoZ7iD0aMS87kEgkiaz9afwNhZOLRVyqBJM",
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
