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
    "skHeSeDYb4lcXn3kT6LeYOooU9eXfIS8z2G1u6LdxqBVzKkAgJCTsbz3wc5H2IK2Y9yH1cTUv8d4j3XQAo9oZQyaHHLWRYtWa7CD497uVlFsch1PHfT8h11gQByokSdTYPt238cwKMEBoCw5Xssl1EyG3FLFzd2Y7LU25tL8RHpf47be2szn",
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
