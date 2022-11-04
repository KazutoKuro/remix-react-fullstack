import { LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";

/**
 * Server side: Function that will be called on the server before rendering to provide data to the route
 */
export const loader: LoaderFunction = () => {};

export const meta: MetaFunction = () => ({
  title: "Films | Studio Ghibli",
  description: "List of films",
});

/**
 * The "links" export : defines which link elemets to add to the page when the user visits a route
 */
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: "styles" }];
};

export default function FilmsIndex() {
  return <div>Films</div>;
}
