#How the Internet Works

##What is the internet?

The Internet is a global system of interconnected computer networks that use the **Internet protocol suite** (TCP/IP), a protocol that connects several billion devices worldwide.

##What is the Internet Protocol Suite?

The Internet protocol suite consists of four layers, the top has the highest level of abstraction:

* Application Layer
* Transport Layer
* Network Layer
* Data link Layer

###Application Layer

This layer is at the top of the TCP/IP protocol suite. There are various protocols the application layer can use and depends on the underlaying transport layer protocols to send data.

Common protocols for this layer include:

* HTTP - HyperText transfer protocol
* FTP - File transfer protocol
* SMTP - Simple mail transfer protocol
* SNMP - Simple network management protocol

###Transport Layer

This layer recieves data from the application layer above. It provides a protocol for the communication of data.

The two most common protocols it can use are:

* TCP - Transmission control protocol

TCP is used when transportation of data (in packets) sent must be *reliable*. It is ideal for transfering files such as images, songs, or webpages.

* UDP - User datagram protocol

UDP is used if transportation of data (in datagrams) must be *fast*. The side-effect is it may become unsequenced and lost along the way. It is ideal for real-time media communication like video-conferencing.

###Internet Layer

This layer's purpose is to handle the movement of data through a network. This layer is responsible for fowarding data from one router to the next so that the data can take the "shortest path" with the least network traffic.

The main protocol is:

* IP - Internet protocol

###Link layer

This layer is the lowest layer of the suite. The is used for nodes (routers) in the network to communicate with one another with electric pulses that represent the data being transfered in binary.

Common protocols include:

* Ethernet
* DSL

##How Is data sent?

Data is broken into **data packets** and routed to a specific **IP address**.

###Data Packets
Data packets or network packets are a finite chunk of information that is sent from one computer to another. Each packet may take a different route to arrive at the same destinate and even arrive a different order than it had been originally sent. Packets are numbered according to their initial order and reassembled by the reciever to assemble a coherent peice of data.

Video: [A packet's journey](https://www.youtube.com/watch?v=ewrBalT_eBM)

###IP Address
Every device connected to the Internet through an service provider is assigned an IP address. If you are part of a LAN every computer on the network will have the same public IP address. The LAN will also assign each device a private or internal address.

Just like mailing a letter, a LAN's public IP address can be thought of as a house's address, while a private IP address can be thought of as a name assigned to a specific person.

##HTTP

"How does HTTP work" you ask? Good question. It is a great idea to know as it is [the protocol every web developer should know](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)!

##Further Reading

* [TCP/IP Wiki](https://en.wikipedia.org/wiki/Internet_protocol_suite)
* [How Does the Internet Work? (Stanford)](http://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm)
* [TCP/IP Fundamentals](http://www.thegeekstuff.com/2011/11/tcp-ip-fundamentals/)
* [HTTP Intro](https://dev.opera.com/articles/http-basic-introduction/)
