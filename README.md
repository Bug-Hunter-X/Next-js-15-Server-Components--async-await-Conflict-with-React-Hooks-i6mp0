# Next.js 15 Server Component Async/Await Hook Conflict

This repository demonstrates an uncommon bug in Next.js 15 involving the interaction of server components, `async/await`, and React hooks (`useState` in this example).  The core problem is the incompatibility of the server-side execution environment of server components with the client-side lifecycle requirements of React hooks.

## Bug Description

When `async/await` is used within a server component that also employs React hooks, unexpected behavior can occur. This can manifest as runtime errors, incorrect data fetching, or inconsistent application state.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the error or unexpected behavior in the browser.

## Solution

The solution involves separating concerns.  Move hook-dependent logic into a client component, while retaining the `async/await` functionality within the server component to fetch data. This data is then passed to the client component as a prop.