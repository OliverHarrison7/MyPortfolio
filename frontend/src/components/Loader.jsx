export function Loader({ message }) {
  return (
    <div className="loader" role="status" aria-live="polite">
      <span className="loader__spinner" aria-hidden="true" />
      <span>{message}</span>
    </div>
  );
}
