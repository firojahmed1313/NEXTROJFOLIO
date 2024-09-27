import React from 'react'
import {
    Html,
    Head,
    Font,
    Heading,
    Row,
    Section,
    Text,
    Button,
} from '@react-email/components';
const EmailCodeSent = ({name, email, subject, message}) => {
    return (
        <>
            <Html lang="en" dir="ltr">
                <Head>
                    <title>{subject}</title>
                    <Font
                        fontFamily="Roboto"
                        fallbackFontFamily="Verdana"
                        webFont={{
                            url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
                            format: 'woff2',
                        }}
                        fontWeight={400}
                        fontStyle="normal"
                    />
                </Head>
                <Section>
                    <Row>
                        <Heading as="h2">Hello MD FIROJ AHMED</Heading>
                    </Row>
                    <Row>
                        <Heading as="h3">Subject:{subject}</Heading>
                    </Row>
                    <Row>
                        <Text>
                            {message}
                        </Text>
                    </Row>
                    <Row>
                        <Heading as="h4">From {name} </Heading>
                    </Row>
                    <Row>
                        <Heading as="h4">Email : {email} </Heading>
                    </Row>

                    {/* <Row>
            <Button
              href={`http://localhost:3000/verify/${username}`}
              style={{ color: '#61dafb' }}
            >
              Verify here
            </Button>
          </Row> */}
                </Section>
            </Html>
        </>
    )
}

export default EmailCodeSent