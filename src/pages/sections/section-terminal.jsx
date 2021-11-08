import React from 'react';
import Section from '../../js/components/section/section';
import Highlight from '../../js/components/section/section-entry/highlight';
import Terminal from '../../js/components/terminal/terminal';
import Code from '../../js/components/terminal/code';

const SectionTerminal = () => {
    return (
        <Section className='section-terminal bg-section-alt text-black dark:bg-grey-29 dark:text-white'
            title={<><Highlight>Hello World</Highlight> Examples</>}
        >
            <Terminal hasCommandLine>
                <Code speed={50} language='javascript' code={`
                    GET /hello-world
                    Host: mysite
                    Pragma: akamai-x-ew-debug
                    Akamai-EW-Trace: st=1603897978~exp=1603899778~acl=/*~hmac=090513d88251d13ceae6dd4d35504498f1ea59c9d081fe8f86ffcf01361cf53f
                    
                    HTTP/1.1 200 OK
                    Content-Type: text/html
                    Content-Length: 70
                    Cache-Control: private, max-age=0
                    Expires: Wed, 28 Oct 2020 15:46:32 GMT
                    Date: Wed, 28 Oct 2020 15:46:32 GMT
                    Connection: keep-alive
                    X-Akamai-EdgeWorker-onClientResponse-Log: D:main.js:22 Adding a header in ClientResponse
                    X-Akamai-EdgeWorker-onClientResponse-Info: ew=[EdgeWoker ID] v1:Hello World; status=Success; status_msg=-; wall_time=0.2; cpu_time=0.194
                    X-Akamai-EdgeWorker-onClientRequest-Log: D:main.js:14 Responding with hello world from the path: /hello-world
                    X-Akamai-EdgeWorker-onClientRequest-Info: ew=[EdgeWoker ID] v1:Hello World; status=Success; status_msg=-; wall_time=0.226; cpu_time=0.211
                    X-Hello-World: From Akamai EdgeWorkers <html><body><h1>Hello World From Akamai EdgeWorkers</h1></body></html>

                `}/>
            </Terminal>
        </Section>
    )
}

export default SectionTerminal;
