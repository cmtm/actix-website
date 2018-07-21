(function() {var implementors = {};
implementors["actix_web"] = [{text:"impl&lt;A, M, S&gt; <a class=\"trait\" href=\"actix_web/actix/actix/dev/trait.ToEnvelope.html\" title=\"trait actix_web::actix::actix::dev::ToEnvelope\">ToEnvelope</a>&lt;A, M&gt; for <a class=\"struct\" href=\"actix_web/struct.HttpContext.html\" title=\"struct actix_web::HttpContext\">HttpContext</a>&lt;A, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"actix_web/actix/actix/trait.Actor.html\" title=\"trait actix_web::actix::actix::Actor\">Actor</a>&lt;Context = <a class=\"struct\" href=\"actix_web/struct.HttpContext.html\" title=\"struct actix_web::HttpContext\">HttpContext</a>&lt;A, S&gt;&gt; + <a class=\"trait\" href=\"actix_web/actix/actix/dev/trait.Handler.html\" title=\"trait actix_web::actix::actix::dev::Handler\">Handler</a>&lt;M&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"actix_web/actix/actix/dev/trait.Message.html\" title=\"trait actix_web::actix::actix::dev::Message\">Message</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"actix_web/actix/actix/dev/trait.Message.html#associatedtype.Result\" title=\"type actix_web::actix::actix::dev::Message::Result\">Result</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:false,types:["actix_web::context::HttpContext"]},{text:"impl&lt;A, M, S&gt; <a class=\"trait\" href=\"actix_web/actix/actix/dev/trait.ToEnvelope.html\" title=\"trait actix_web::actix::actix::dev::ToEnvelope\">ToEnvelope</a>&lt;A, M&gt; for <a class=\"struct\" href=\"actix_web/ws/struct.WebsocketContext.html\" title=\"struct actix_web::ws::WebsocketContext\">WebsocketContext</a>&lt;A, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"actix_web/actix/actix/trait.Actor.html\" title=\"trait actix_web::actix::actix::Actor\">Actor</a>&lt;Context = <a class=\"struct\" href=\"actix_web/ws/struct.WebsocketContext.html\" title=\"struct actix_web::ws::WebsocketContext\">WebsocketContext</a>&lt;A, S&gt;&gt; + <a class=\"trait\" href=\"actix_web/actix/actix/dev/trait.Handler.html\" title=\"trait actix_web::actix::actix::dev::Handler\">Handler</a>&lt;M&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"actix_web/actix/actix/dev/trait.Message.html\" title=\"trait actix_web::actix::actix::dev::Message\">ActixMessage</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"actix_web/actix/actix/dev/trait.Message.html#associatedtype.Result\" title=\"type actix_web::actix::actix::dev::Message::Result\">Result</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:false,types:["actix_web::ws::context::WebsocketContext"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()