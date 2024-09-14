import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Dreamhub"}
                </title>
            </Head>
        </>
    )
}

export default PageHead