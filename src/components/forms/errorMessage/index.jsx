function ErrorMessage({error, visible}) {
  if (!visible || !error) {
    return null;
  }

  return (
    <div className="flex-1 flex-row items-center">
      <p className="block tracking-wide text-xs pl-3 text-red-600 font-bold">
        {error}
      </p>
    </div>
  )
}

export default ErrorMessage;
