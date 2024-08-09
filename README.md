# ASP.NET Core, Angular 4 & TypeScript
Blog post:<a href="http://wp.me/p3mRWu-11L" target="_blank">Cross-platform Single Page Applications using ASP.NET Core, Angular 2 and Typescript</a> <br/><br/>
<a href="http://wp.me/p3mRWu-11L" rel="attachment wp-att-3961" target="_blank"><img src="https://GreenBett.files.wordpress.com/2016/05/aspcorerc2.png?w=700&amp;h=355" alt="aspnet5-agnular2-03" width="700" height="355" class="alignnone size-full wp-image-3961"></a>

<h3>Frameworks - Tools - Libraries</h3>
<ul>
<li>ASP.NET Core</li>
<li>Entity Framework Core</li>
<li>Automapper</li>
<li>Angular 4</li>
<li>Typescript</li>
<li>Bootstrap 3</li>
<li>Gulp</li>
<li>Bower</li>
</ul>

<h3>Installation instructions - Part 1 (Applied for Windows/Linux/MAC)</h3>
<ol>
<li>Install ASP.NET Core according to your development environment from <a href="https://www.microsoft.com/net/core" target="_blank">here</a>.</li>
<li>Install <strong>NPM</strong> by installing <a href="https://nodejs.org/en/" target="_blank">Node.js</a>.</li>
<li>Install Bower, Gulp, Typescript and Typescript Definition Manager globally by typing the following commands on the console/terminal:
<ul>
<li>npm install -g bower</li>
<li>npm install -g gulp</li>
<li>npm install -g typescript</li>
<li>npm install -g tsd</li>
</ul>
</li>

<h3>Installation instructions - Part 2 (Run application in Visual Studio 2017, only for Windows users)</h3>
<ol>
<li>Download and install Visual Studio 2017 from <a href="https://www.visualstudio.com/en-us/downloads/download-visual-studio-vs.aspx" target="_blank">here</a>.</li>
<li>Open Visual Studio 2017 and install any update related to ASP.NET Core (check the notifications).</li>
<li>Download the source code and open the solution.</li>
<li>By the time you open the solution, VS 2017 will try to restore Nuget, NPM and Bower packages.</li>
<li>In case it fails to restore NPM and Bower packages, open a console and navigate at the src/PhotoGallery path where the <i>package.json</i> and <i>bower.json</i> files exist. Run the following commands:
<ul>
<li>npm install</li>
<li>bower install</li>
<li>gulp build-spa</li>
</ul>
</li>
<li>Open <strong>appsettings.json</strong> file and alter the database connection string to reflect your SQL Server environment.</li>
<li>Open a console and navigate to src/PhotoGallery where the project.json exists. Run the following commands to enable migrations and create the database:
<ol>
<li>dotnet ef migrations add initial</li>
<li>dotnet ef database update</li>
</ol>
</li>
<li>Build your application and run it. You can use <i>username:</i> <strong>GreenBett</strong> and <i>password:</i> <strong>photogallery</strong> to sign in or register a new user.</li>
</ol>

<h3>Installation instructions - Part 2 (Run application in Visual Studio Code, recommended for Linux/MAC users)</h3>
<ol>
<li>Download and install Visual Studio Code from <a href="https://www.visualstudio.com/en-us/downloads/download-visual-studio-vs.aspx" target="_blank">here</a>.</li>
<li>Install the csharp extension from <a href="https://code.visualstudio.com/Docs/languages/csharp" target="_blank">here</a></li>
<li>Download the source code and open the src/PhotoGallery folder in Visual Studio Code.</li>
<li>Open a console/terminal and navigate at the src/PhotoGallery path where the <i>package.json</i> and <i>bower.json</i> files exist. Run the following commands:
<ul>
<li>npm install</li>
<li>bower install</li>
<li>gulp build-spa</li>
</ul>
</li>
<li>Run the following command to restore Nuget Packages (dependencies)
<ul>
<li>dotnet restore</li>
</ul>
</li>
<li>Application uses SQL Server so in case you want to run the app in Linux or MAC simply set <b>"InMemoryProvider": true</b> in <i>appsettings.json</i> and skip to the last 3 steps to run the app.</li>
<li>Open <strong>appsettings.json</strong> file and alter the database connection string to reflect your SQL Server environment.</li>
<li>Open a console/terminal and navigate to src/PhotoGallery where the project.json exists. Run the following commands to enable migrations and create the database:
<ol>
<li>dotnet ef migrations add initial</li>
<li>dotnet ef database update</li>
</ol>
</li>
<li>Host your application using <strong>Kestrel</strong> by typing the following command while at src/PhotoGallery:
<ul>
<li>dotnet run</li>
</ul>
</li>
<li>Open a browser and navigate to http://localhost:5000/</li>
<li>You can use <i>username:</i> <strong>GreenBett</strong> and <i>password:</i> <strong>photogallery</strong> to sign in or register a new user.</li>
</ol>

<h2>Donations</h2>
For being part of open source projects and documenting my work here and on there. I really do not charge anything. I try to avoid any type of ads also.

<h2>License</h2>
Code released under the <a href="https://github.com/GreenBett/aspnet5-angular2-typescript/blob/master/licence" target="_blank"> MIT license</a>.
