```javascript
// pages/my-page.js (Server Component)
export default async function MyPage() {
  const data = await fetchData();

  return (
    <ClientComponent data={data} />
  );
}

async function fetchData() {
  const res = await fetch('/api/data');
  return res.json();
}

// Client Component
function ClientComponent({ data }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Data: {data}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```