import client from "@sanity/client";

export default client({
  projectId: "044z4z4y",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-09-12",
});
