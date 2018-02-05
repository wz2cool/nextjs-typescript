import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    public render() {
        return (
            <html>
                <Head>
                    <style>{`body { margin: 0 } /* custom! */`}</style>
                </Head>
                <body className="custom_class">
                123123123
                    {this.props.customValue}
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}