

function Faq() {


    const faqData = [
        {
            question: "What is VaultCli?",
            answer: "VaultCli is a command-line interface for HashiCorp Vault that allows you to manage secrets, tokens, and other Vault resources from your terminal."
        },
        {
            question: "Is VaultCli open source?",
            answer: "Yes, VaultCli is open source and available on GitHub under the MIT license."
        },
        {
            question: "Can VaultCli be used with self-hosted Vault instances?",
            answer: "Yes, VaultCli can be used with both self-hosted and cloud-hosted Vault instances."
        },
        {
            question: "Does VaultCli support multiple authentication methods?",
            answer: "Yes, VaultCli supports multiple authentication methods including AppRole, Kubernetes, and Username/Password."
        },
        {
            question: "Can VaultCli be used with multiple Vault instances?",
            answer: "Yes, VaultCli can be used with multiple Vault instances."
        }
    ];


  return (
    <div>
        <h2 className="text-4xl mb-6 font-bold text-start">
            Frequently Asked Questions?
        </h2>
        <div className=''>
            {faqData.map((faq) => (
                <div className='text-start mb-4'>
                    <h2 className='font-bold text-xl mb-4'>{faq.question}</h2>
                    <p className='ml-4 text-sm'>{faq.answer}</p>
                </div>
            ))}
        </div>


<div className='mt-8 border-t border-zinc-700 pt-8'>
    <div>
        <h2 className='text-xl font-bold text-start mb-4'>
            What’s next? Building your app with VaultCLI
        </h2>

        <p className='mt-2 text-zinc-300 text-start '>
            Now that you’ve set up VaultCLI, the next step is integrating it into your application.
            If you’re unfamiliar with the technologies used in this project, check their official documentation below.
        </p>

        <p className='mt-2 text-zinc-300 text-start pt-2'>
            If you get stuck or need help, you can join our community Discord and ask questions — we’re happy to help you get started.
        </p>

        <ul className='mt-6 text-blue-400 list-disc text-start space-y-2'>
            <li className='hover:underline cursor-pointer'>
                PostgreSQL — relational database for structured data
            </li>
            <li className='hover:underline cursor-pointer'>
                Supabase — backend-as-a-service with auth and database tools
            </li>
            <li className='hover:underline cursor-pointer'>
                MySQL — widely used relational database system
            </li>
            <li className='hover:underline cursor-pointer'>
                MongoDB — NoSQL database for flexible, document-based storage
            </li>
        </ul>

    </div>


</div>

<div className="mt-8">
    <h2 className='font-bold text-xl text-start'>
        How do I keep my app up to date?
    </h2>
    <p className='mt-2 text-zinc-300 text-start'>
        To keep your app up to date with the latest version of VaultCLI, you can use the following command:

        <div className="w-full h-12 flex justify-center bg-zinc-800 rounded-xl ">
            <pre className='mt-2 text-gray text-start text-2xl'>
                <span className='text-green-400  ml-4 mr-4'>$ vault</span>update
            </pre>
        </div>
    </p>
</div>

<div className="mt-12">
<h2 className='font-bold text-xl text-start'>
    How can I assure the security of my data? 

</h2>
<p className='mt-4 text-zinc-300 text-start'>
    VaultCLI uses Argon2 for password hashing and AES-256 encryption to secure your data. Your secrets are encrypted using your master password before being stored in the vault.
   
</p>
<p className="text-start pt-4">
    Furthermore, our zero trust architecture ensures that your data is always secure meaning even if your database is compromised no data will ever be exposed.
</p>

</div>


<div>
    <h2></h2>













</div>


</div>
    
  )
}

export default Faq