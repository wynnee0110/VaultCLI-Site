

function Configuration() {
    const config = [
        {
            name: "path",
            description: "Sets the default directory where secrets will be stored. This allows you to avoid typing the full path every time you use put, get, or delete.",
            usage: "vault set path <path>",
            example: "$ vault set path vault/prod",
        }
    ]

  return (
    <div>
        <h2 className="text-3xl font-semibold text-zinc-100 mb-4 tracking-tight">
            Configuration
        </h2>
        <p>
            Customize your VaultCLI experience with simple, powerful configuration options.
        </p>

        <div>
            {config.map((c) => (
                <div key={c.name}>
                    <h3 className="text-lg font-bold text-start">{c.name}</h3>
                    <p>{c.description}</p>
                    <p>{c.usage}</p>
                    <p>{c.example}</p>
                </div>
            ))}

        </div>
   
    </div>
  )
}   

export default Configuration