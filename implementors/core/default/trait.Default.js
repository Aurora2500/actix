(function() {var implementors = {};
implementors["actix"] = [{"text":"impl Default for SpawnHandle","synthetic":false,"types":[]},{"text":"impl&lt;A&gt; Default for Mailbox&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Actor,<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Context: AsyncContext&lt;A&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Unpin&gt; Default for Mocker&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Default for Resolver","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Default for Condition&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Clone,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["server"] = [{"text":"impl Default for ChatServer","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()