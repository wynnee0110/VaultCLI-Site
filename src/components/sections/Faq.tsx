

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
        <h2 className="text-2xl mb-4 font-bold">
            Frequently Asked Questions?
        </h2>
        <div className='p-4'>
            {faqData.map((faq) => (
                <div className='text-start mb-4'>
                    <h2 className='font-bold text-xl mb-4'>{faq.question}</h2>
                    <p className='ml-4 text-sm'>{faq.answer}</p>
                </div>
            ))}
        </div>


        <div className='mt-8 border-t border-zinc-700 pt-8'>
            <div>
                <h2 className='text-xl font-bold'>
                    What’s next? How do I make an app with this?
                </h2>
                <p>
                    If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our Discord↗ and ask for help.
                    
                </p>

                <ul className='mt-6 text-blue-400 list-disc text-start'>
                    <li className='mt-2 hover:underline'>
                        Postgres↗
                    </li>
                    <li className='mt-2 hover:underline'>
                        Supabase↗
                    </li>
                    <li className='mt-2'>
                        MySQL↗
                    </li>
                    <li className='mt-2'>
                        MongoDB↗
                    </li>
                </ul>


                


            </div>
        </div>





    </div>
    
  )
}

export default Faq