import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as any; // Forced to use any for now

  return (
    <div className="font-barlow flex h-screen min-h-36 flex-col items-center justify-center text-center text-amber-800">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
