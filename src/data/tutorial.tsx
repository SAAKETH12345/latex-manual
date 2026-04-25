import { CodeBlock } from '../components/CodeBlock';
import { LatexOutput } from '../components/LatexOutput';
import { cn } from '../lib/utils';
import { BookA, Code, Image as ImageIcon, Layout, List, Hash, Download, Package } from 'lucide-react';

export const tutorialSections = [
  {
    id: 'what-is-latex',
    title: '1 What is LaTeX?',
    icon: <BookA className="w-5 h-5" />,
    content: (
      <div className="space-y-4 text-slate-700">
        <p>
          LaTeX (pronounced “LAY-tek” or “LAH-tek”) is a tool for typesetting professional-looking documents. However, LaTeX’s mode of operation is quite different to many other document-production applications you may have used, such as Microsoft Word or LibreOffice Writer: those “WYSIWYG” tools provide users with an interactive page into which they type and edit their text and apply various forms of styling. LaTeX works very differently: instead, your document is a plain text file interspersed with LaTeX commands used to express the desired (typeset) results. To produce a visible, typeset document, your LaTeX file is processed by a piece of software called a TeX engine which uses the commands embedded in your text file to guide and control the typesetting process, converting the LaTeX commands and document text into a professionally typeset PDF file. This means you only need to focus on the content of your document and the computer, via LaTeX commands and the TeX engine, will take care of the visual appearance (formatting).
        </p>
      </div>
    )
  },
  {
    id: 'why-learn-latex',
    title: '2 Why learn LaTeX?',
    icon: <Layout className="w-5 h-5" />,
    content: (
      <div className="space-y-4 text-slate-700">
        <p>
          Various arguments can be proposed for, or against, learning to use LaTeX instead of other document-authoring applications; but, ultimately, it is a personal choice based on preferences, affinities, and documentation requirements.
        </p>
        <p className="mt-4">Arguments in favour of LaTeX include:</p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>support for typesetting extremely complex mathematics, tables and technical content for the physical sciences;</li>
          <li>facilities for footnotes, cross-referencing and management of bibliographies;</li>
          <li>ease of producing complicated, or tedious, document elements such as indexes, glossaries, table of contents, lists of figures;</li>
          <li>being highly customizable for bespoke document production due to its intrinsic programmability and extensibility through thousands of free add-on packages.</li>
        </ul>
        <p className="mt-4">
          Overall, LaTeX provides users with a great deal of control over the production of documents which are typeset to extremely high standards. Of course, there are types of documents or publications where LaTeX doesn’t shine, including many “free form” page designs typically found in magazine-type publications.
        </p>
        <p className="mt-4">
          One important benefit of LaTeX is the separation of document content from document style: once you have written the content of your document, its appearance can be changed with ease. Similarly, you can create a LaTeX file which defines the layout/style of a particular document type and that file can be used as a template to standardise authorship/production of additional documents of that type; for example, this allows scientific publishers to create article templates, in LaTeX, which authors use to write papers for submission to journals. Overleaf has a gallery containing thousands of templates, covering an enormous range of document types—everything from scientific articles, reports and books to CVs and presentations. Because these templates define the layout and style of the document, authors need only to open them in Overleaf—creating a new project—and commence writing to add their content.
        </p>
        
        <div className="mt-8 overflow-hidden rounded-xl bg-slate-900 border border-slate-800 shadow-xl aspect-video w-full max-w-3xl">
           <iframe 
             
             title="Learn LaTeX" 
             className="w-full h-full"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
             allowFullScreen 
           />
        </div>
      </div>
    )
  },
  {
    id: 'writing-your-first-piece',
    title: '3 Writing your first piece of LaTeX',
    icon: <Code className="w-5 h-5" />,
    content: (
      <div className="space-y-4 text-slate-700">
        <p>
          The first step is to create a new LaTeX project. You can do this on your own computer by creating a new .tex file; alternatively, you can start a new project in Overleaf.
        </p>
        <p>
          Let’s start with the simplest working example, which can be opened directly in Overleaf:
        </p>
        <CodeBlock code={`\\documentclass{article}
\\begin{document}
First document. This is a simple example, with no 
extra parameters or packages included.
\\end{document}`} />
        <p>This example produces the following output:</p>
        <LatexOutput>
          <div className="indent-4">
            First document. This is a simple example, with no extra parameters or packages included.
          </div>
        </LatexOutput>
        <p>
          You can see that LaTeX has automatically indented the first line of the paragraph, taking care of that formatting for you. Let’s have a closer look at what each part of our code does.
        </p>
        <p>
          The first line of code, <code>\documentclass{`{article}`}</code>, declares the document type known as its class, which controls the overall appearance of the document. Different types of documents require different classes; i.e., a CV/resume will require a different class than a scientific paper which might use the standard LaTeX article class. Other types of documents you may be working on may require different classes such as book or report. To get some idea of the many LaTeX class types available, visit the relevant page on CTAN (Comprehensive TeX Archive Network).
        </p>
        <p>
          Having set the document class, our content, known as the body of the document, is written between the <code>\begin{`{document}`}</code> and <code>\end{`{document}`}</code> tags. After opening the example above, you can make changes to the text and, when finished, view the resulting typeset PDF by recompiling the document. To do this in Overleaf, simply hit Recompile, as demonstrated in this brief video clip:
        </p>
        <div className="mt-8 overflow-hidden rounded-xl bg-slate-900 border border-slate-800 shadow-xl aspect-video w-full max-w-3xl">
           <iframe 
             src="https://cdn.imgchest.com/files/b2eb23224013.mp4" 
             title="How to compile" 
             className="w-full h-full"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
             allowFullScreen 
           />
        </div>
        <p className="mt-4">
          Any Overleaf project can be configured to recompile automatically each time it is edited: click the small arrow next to the Recompile button and set Auto Compile to On, as shown in the following screengrab:
        </p>
        <div className="my-6">
          <img 
            src="https://sharelatex-wiki-cdn-671420.c.cdn77.org/learn-scripts/images/7/77/LL30autocompile.png" 
            alt="Screengrab showing how to set Auto Compile to On or Off" 
            className="w-full rounded border border-slate-200"
          />
        </div>
        <p>
          Having seen how to add content to our document, the next step is to give it a title. To do this, we must talk briefly about the preamble.
        </p>
      </div>
    )
  },
  {
    id: 'the-preamble',
    title: '4 The preamble of a document',
    icon: <Code className="w-5 h-5" />,
    content: (
      <div className="space-y-4 text-slate-700">
        <p>
          The screengrab above shows Overleaf storing a LaTeX document as a file called main.tex: the .tex file extension is, by convention, used when naming files containing your document’s LaTeX code.
        </p>
        <p>
          The previous example showed how document content was entered after the <code>\begin{`{document}`}</code> command; however, everything in your .tex file appearing before that point is called the preamble, which acts as the document’s “setup” section. Within the preamble you define the document class (type) together with specifics such as languages to be used when writing the document; loading packages you would like to use (more on this later), and it is where you’d apply other types of configuration.
        </p>
        <p>A minimal document preamble might look like this:</p>
        <CodeBlock code={`\\documentclass[12pt, letterpaper]{article}
\\usepackage{graphicx}`} />
        <p>
          where <code>\documentclass[12pt, letterpaper]{`{article}`}</code> defines the overall class (type) of document. Additional parameters, which must be separated by commas, are included in square brackets ([...]) and used to configure this instance of the article class; i.e., settings we wish to use for this particular article-class-based document.
        </p>
        <p>In this example, the two parameters do the following:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>12pt sets the font size</li>
          <li>letterpaper sets the paper size</li>
        </ul>
        <p>
            Of course other font sizes, 9pt, 11pt, 12pt, can be used, but if none is specified, the default size is 10pt. As for the paper size, other possible values are a4paper and legalpaper. For further information see the article about page size and margins.
        </p>
        <p>The preamble line</p>
        <CodeBlock code={`\\usepackage{graphicx}`} />
        <p>
          is an example of loading an external package (here, graphicx) to extend LaTeX’s capabilities, enabling it to import external graphics files. LaTeX packages are discussed in the section Finding and using LaTeX packages.
        </p>
      </div>
    )
  },
  {
    id: 'title-author-date',
    title: '5 Including title, author and date information',
    icon: <BookA className="w-5 h-5" />,
    content: (
      <div className="space-y-4 text-slate-700">
        <p>
          Adding a title, author and date to our document requires three more lines in the preamble (not the main body of the document). Those lines are:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><code>\title{`{My first LaTeX document}`}</code>: the document title</li>
          <li><code>\author{`{Hubert Farnsworth}`}</code>: here you write the name of the author(s) and, optionally, the <code>\thanks</code> command within the curly braces:</li>
          <li><code>\thanks{`{Funded by the Overleaf team.}`}</code>: can be added after the name of the author, inside the braces of the author command. It will add a superscript and a footnote with the text inside the braces. Useful if you need to thank an institution in your article.</li>
          <li><code>\date{`{August 2022}`}</code>: you can enter the date manually or use the command <code>\today</code> to typeset the current date every time the document is compiled</li>
        </ul>
        <p>With these lines added, your preamble should look something like this:</p>
        <CodeBlock code={`\\documentclass[12pt, letterpaper]{article}
\\title{My first LaTeX document}
\\author{Hubert Farnsworth\\thanks{Funded by the Overleaf team.}}
\\date{August 2022}`} />
        <p>To typeset the title, author and date use the <code>\maketitle</code> command within the body of the document:</p>
        <CodeBlock code={`\\begin{document}
\\maketitle
We have now added a title, author and date to our first \\LaTeX{} document!
\\end{document}`} />
         <p>The preamble and body can now be combined to produce a complete document which can be opened in Overleaf:</p>
         <CodeBlock code={`\\documentclass[12pt, letterpaper]{article}
\\title{My first LaTeX document}
\\author{Hubert Farnsworth\\thanks{Funded by the Overleaf team.}}
\\date{August 2022}
\\begin{document}
\\maketitle
We have now added a title, author and date to our first \\LaTeX{} document!
\\end{document}`} />
        <LatexOutput>
          <div className="text-center mb-8 mt-4">
            <h1 className="text-2xl font-normal mb-2">My first LaTeX document</h1>
            <div className="text-sm space-y-1 mt-4">
              <p>Hubert Farnsworth<span className="align-super text-[10px] ml-0.5">*</span></p>
              <p>August 2022</p>
            </div>
          </div>
          <div className="indent-4">
            We have now added a title, author and date to our first LaTeX document!
          </div>
          <div className="border-t border-slate-300 mt-12 pt-2 text-[10px]">
            *Funded by the Overleaf team.
          </div>
        </LatexOutput>
      </div>
    )
  },
  {
    id: 'adding-comments',
    title: '6 Adding comments',
    icon: <BookA className="w-5 h-5" />,
    content: (
       <div className="space-y-4 text-slate-700">
           <p>LaTeX is a form of “program code”, but one which specializes in document typesetting; consequently, as with code written in any other programming language, it can be very useful to include comments within your document. A LaTeX comment is a section of text that will not be typeset or affect the document in any way—often used to add “to do” notes; include explanatory notes; provide in-line explanations of tricky macros or comment-out lines/sections of LaTeX code when debugging.</p>
           <p>To make a comment in LaTeX, simply write a % symbol at the beginning of the line, as shown in the following code which uses the example above:</p>
           <CodeBlock code={`\\documentclass[12pt, letterpaper]{article}
\\title{My first LaTeX document}
\\author{Hubert Farnsworth\\thanks{Funded by the Overleaf team.}}
\\date{August 2022}
\\begin{document}
\\maketitle
We have now added a title, author and date to our first \\LaTeX{} document!

% This line here is a comment. It will not be typeset in the document.
\\end{document}`} />
           <p>This example produces output that is identical to the previous LaTeX code which did not contain the comment.</p>
       </div>
    )
  },
  {
    id: 'bold-italics-underline',
    title: '7 Bold, italics and underlining',
    icon: <BookA className="w-5 h-5" />,
    content: (
      <div className="space-y-4 text-slate-700">
        <p>Next, we will now look at some text formatting commands:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Bold</strong>: bold text in LaTeX is typeset using the <code>\textbf{`{...}`}</code> command.</li>
          <li><em>Italics</em>: italicised text is produced using the <code>\textit{`{...}`}</code> command.</li>
          <li><span className="underline">Underline</span>: to underline text use the <code>\underline{`{...}`}</code> command.</li>
        </ul>
        <p>The next example demonstrates these commands:</p>
        <CodeBlock code={`Some of the \\textbf{greatest}
discoveries in \\underline{science} 
were made by \\textbf{\\textit{accident}}.`} />
        
        <p>This example produces the following output:</p>
        <LatexOutput>
          <div className="indent-4">
            Some of the <b>greatest</b> discoveries in <u>science</u> were made by <b><i>accident</i></b>.
          </div>
        </LatexOutput>

        <p>Another very useful command is <code>\emph{`{argument}`}</code>, whose effect on its argument depends on the context. Inside normal text, the emphasized text is italicized, but this behaviour is reversed if used inside an italicized text—see the next example:</p>
        <CodeBlock code={`Some of the greatest \\emph{discoveries} in science 
were made by accident.

\\textit{Some of the greatest \\emph{discoveries} 
in science were made by accident.}

\\textbf{Some of the greatest \\emph{discoveries} 
in science were made by accident.}`} />
        <LatexOutput>
            <div className="space-y-4">
                <div className="indent-4">
                    Some of the greatest <i>discoveries</i> in science were made by accident.
                </div>
                <div className="indent-4">
                    <i>Some of the greatest <span className="not-italic">discoveries</span> in science were made by accident.</i>
                </div>
                <div className="indent-4">
                    <b>Some of the greatest <i>discoveries</i> in science were made by accident.</b>
                </div>
            </div>
        </LatexOutput>
        <p>Note: some packages, such as Beamer, change the behaviour of the \emph command.</p>
      </div>
    )
  },
  {
    id: 'adding-images',
    title: '8 Adding images',
    icon: <ImageIcon className="w-5 h-5" />,
    content: (
      <div className="space-y-4 text-slate-700">
        <p>
            In this section we will look at how to add images to a LaTeX document. Overleaf supports three ways to insert images:
        </p>
        <ol className="list-decimal pl-5 space-y-1">
            <li>Use the <strong>Insert Figure</strong> button, located on the editor toolbar, to insert an image into Visual Editor or Code Editor.</li>
            <li>Copy and paste an image into Visual Editor or Code Editor.</li>
            <li>Use Code Editor to write LaTeX code that inserts a graphic.</li>
        </ol>
        <p>
          Options 1 and 2 automatically generate the LaTeX code required to insert images, but here we introduce option 3—note that you will need to upload those images to your Overleaf project. The following example demonstrates how to include a picture:
        </p>
        <CodeBlock code={`\\documentclass{article}
\\usepackage{graphicx} %LaTeX package to import graphics
\\graphicspath{{images/}} %configuring the graphicx package
 
\\begin{document}
The universe is immense and it seems to be homogeneous, 
on a large scale, everywhere we look.

% The \\includegraphics command is 
% provided (implemented) by the 
% graphicx package
\\includegraphics{universe}  
 
There's a picture of a galaxy above.
\\end{document}`} />
        <p>This example produces the following output:</p>
        <LatexOutput>
          <div className="indent-4">
            The universe is immense and it seems to be homogeneous, on a large scale, everywhere we look.
          </div>
          <div className="my-6">
            <img 
              src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80" 
              alt="Universe galaxy" 
              className="w-full rounded"
            />
          </div>
          <div className="indent-4">
            There's a picture of a galaxy above.
          </div>
        </LatexOutput>
        <p>
            Importing graphics into a LaTeX document needs an add-on package which provides the commands and features required to include external graphics files. The above example loads the graphicx package which, among many other commands, provides <code>\includegraphics{`{...}`}</code> to import graphics and <code>\graphicspath{`{...}`}</code> to advise LaTeX where the graphics are located.
        </p>
        <p>To use the graphicx package, include the following line in your Overleaf document preamble:</p>
        <CodeBlock code={`\\usepackage{graphicx}`} />
        <p>In our example the command <code>\graphicspath{`{{images/}}`}</code> informs LaTeX that images are kept in a folder named images, which is contained in the current directory:</p>
        <div className="my-6">
          <img 
            src="https://www.overleaf.com/learn/latex/images/Images-folder-in-a-LaTeX-project.png" 
            alt="Image showing LaTeX accessing images stored in a folder" 
            className="w-full max-w-sm rounded border border-slate-200"
          />
        </div>
        <p>The <code>\includegraphics{`{universe}`}</code> command does the actual work of inserting the image in the document. Here, universe is the name of the image file but without its extension.</p>
        <p>Note:</p>
        <ul className="list-disc pl-5 space-y-1">
            <li>Although the full file name, including its extension, is allowed in the \includegraphics command, it’s considered best practice to omit the file extension because it will prompt LaTeX to search for all the supported formats.</li>
            <li>Generally, the graphic’s file name should not contain white spaces or multiple dots; it is also recommended to use lowercase letters for the file extension when uploading image files to Overleaf.</li>
        </ul>
        <p>More information on LaTeX packages can be found at the end of this tutorial in the section Finding and using LaTeX packages.</p>
      </div>
    )
  },
  {
    id: 'captions-labels-references',
    title: '9 Captions, labels and references',
    icon: <ImageIcon className="w-5 h-5" />,
    content: (
      <div className="space-y-4 text-slate-700">
        <p>
          Images can be captioned, labelled and referenced by means of the <code>figure</code> environment, as shown below:
        </p>
        <CodeBlock code={`\\documentclass{article}
\\usepackage{graphicx}
\\graphicspath{{images/}}
 
\\begin{document}

\\begin{figure}[h]
    \\centering
    \\includegraphics[width=0.75\\textwidth]{mesh}
    \\caption{A nice plot.}
    \\label{fig:mesh1}
\\end{figure}
 
As you can see in figure \\ref{fig:mesh1}, the function grows near the origin. This example is on page \\pageref{fig:mesh1}.

\\end{document}`} />
         <p>This example produces the following output:</p>
        <LatexOutput>
          <div className="my-6 text-center">
            <img 
              src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80" 
              alt="Mesh plot" 
              className="w-3/4 mx-auto rounded mb-2"
            />
            <div className="text-sm">
              <span className="cursor-text">Figure 1: A nice plot.</span>
            </div>
          </div>
          <div className="indent-4">
            As you can see in figure 1, the function grows near the origin. This example is on page 1.
          </div>
        </LatexOutput>
        <p>There are several noteworthy commands in the example:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li><code>\includegraphics[width=0.75\textwidth]{`{mesh}`}</code>: This form of <code>\includegraphics</code> instructs LaTeX to set the figure’s width to 75% of the text width—whose value is stored in the <code>\textwidth</code> command.</li>
            <li><code>\caption{`{A nice plot.}`}</code>: As its name suggests, this command sets the figure caption which can be placed above or below the figure. If you create a list of figures this caption will be used in that list.</li>
            <li><code>\label{`{fig:mesh1}`}</code>: To reference this image within your document you give it a label using the <code>\label</code> command. The label is used to generate a number for the image and, combined with the next command, will allow you to reference it.</li>
            <li><code>\ref{`{fig:mesh1}`}</code>: This code will be substituted by the number corresponding to the referenced figure.</li>
        </ul>
        <p>Images incorporated in a LaTeX document should be placed inside a figure environment, or similar, so that LaTeX can automatically position the image at a suitable location in your document.</p>
        <p>Further guidance is contained in the following Overleaf help articles:</p>
        <ul className="list-disc pl-5 space-y-1">
            <li>Positioning of Figures</li>
            <li>Inserting Images</li>
        </ul>
      </div>
    )
  },
  {
    id: 'lists',
    title: '10 Creating lists in LaTeX',
    icon: <List className="w-5 h-5" />,
    content: (
      <div className="space-y-4 text-slate-700">
        <p>You can create different types of list using environments, which are used to encapsulate the LaTeX code required to implement a specific typesetting feature. An environment starts with <code>\begin{`{environment-name}`}</code> and ends with <code>\end{`{environment-name}`}</code> where environment-name might be figure, tabular or one of the list types: itemize for unordered lists or enumerate for ordered lists.</p>
        <h3 className="text-lg font-semibold text-slate-900 mt-6 pt-4">10.1 Unordered lists</h3>
        <p>Unordered lists are produced by the <code>itemize</code> environment. Each list entry must be preceded by the <code>\item</code> command, as shown below:</p>
        <CodeBlock code={`\\documentclass{article}
\\begin{document}
\\begin{itemize}
  \\item The individual entries are indicated with a black dot, a so-called bullet.
  \\item The text in the entries may be of any length.
\\end{itemize}
\\end{document}`} />
        <p>This example produces the following output:</p>
        <LatexOutput>
          <ul className="list-disc pl-5 my-2 space-y-1">
            <li>The individual entries are indicated with a black dot, a so-called bullet.</li>
            <li>The text in the entries may be of any length.</li>
          </ul>
        </LatexOutput>
        
        <h3 className="text-lg font-semibold text-slate-900 mt-6 pt-4 border-t">10.2 Ordered lists</h3>
        <p>Ordered lists use the same syntax as unordered lists but are created using the <code>enumerate</code> environment:</p>
        <CodeBlock code={`\\documentclass{article}
\\begin{document}
\\begin{enumerate}
  \\item This is the first entry in our list.
  \\item The list numbers increase with each entry we add.
\\end{enumerate}
\\end{document}`} />
        <p>This example produces the following output:</p>
        <LatexOutput>
          <ol className="list-decimal pl-5 my-2 space-y-1">
            <li>This is the first entry in our list.</li>
            <li>The list numbers increase with each entry we add.</li>
          </ol>
        </LatexOutput>
        <p>As with unordered lists, each entry must be preceded by the <code>\item</code> command which, here, automatically generates the numeric ordered-list label value, starting at 1.</p>
        <p>For further information you can open this larger Overleaf project which demonstrates various types of LaTeX list or visit our dedicated help article on LaTeX lists, which provides many more examples and shows how to create customized lists.</p>
      </div>
    )
  },
  {
    id: 'math',
    title: '11 Adding math to LaTeX',
    icon: <Hash className="w-5 h-5" />,
    content: (
      <div className="space-y-4 text-slate-700">
        <p>One of the main advantages of LaTeX is the ease with which mathematical expressions can be written. LaTeX provides two writing modes for typesetting mathematics:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>inline math mode</strong> used for writing formulas that are part of a paragraph</li>
          <li><strong>display math mode</strong> used to write expressions that are not part of a text or paragraph and are typeset on separate lines</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-slate-900 mt-6 pt-4">11.1 Inline math mode</h3>
        <p>Let’s see an example of inline math mode:</p>
        <CodeBlock code={`\\documentclass[12pt, letterpaper]{article}
\\begin{document}
In physics, the mass-energy equivalence is stated 
by the equation $E=mc^2$, discovered in 1905 by Albert Einstein.
\\end{document}`} />
        <p>This example produces the following output:</p>
        <LatexOutput>
          <div className="indent-4">
            In physics, the mass-energy equivalence is stated by the equation <i>E=mc&sup2;</i>, discovered in 1905 by Albert Einstein. 
          </div>
        </LatexOutput>
        <p>To typeset inline-mode math you can use one of these delimiter pairs: <code>\( ... \)</code>, <code>$ ... $</code> or <code>\begin{`{math}`} ... \end{`{math}`}</code>, as demonstrated in the following example:</p>
        <CodeBlock code={`\\documentclass[12pt, letterpaper]{article}
\\begin{document}
\\begin{math}
E=mc^2
\\end{math} is typeset in a paragraph using inline math mode---as is $E=mc^2$, and so too is \\(E=mc^2\\).
\\end{document}`} />

        <h3 className="text-lg font-semibold text-slate-900 mt-6 pt-4 border-t">11.2 Display math mode</h3>
        <p>Equations typeset in display mode can be numbered or unnumbered, as in the following example:</p>
        <CodeBlock code={`\\documentclass[12pt, letterpaper]{article}
\\begin{document}
The mass-energy equivalence is described by the famous equation
\\[ E=mc^2 \\] discovered in 1905 by Albert Einstein. 

In natural units ($c = 1$), the formula expresses the identity
\\begin{equation}
E=m
\\end{equation}
\\end{document}`} />
        <p>This example produces the following output:</p>
        <LatexOutput>
          <div className="indent-4">
            The mass-energy equivalence is described by the famous equation
          </div>
          <div className="my-4 text-center pb-2 relative font-serif">
             <i>E = mc&sup2;</i>
          </div>
          <div className="indent-4">
            discovered in 1905 by Albert Einstein. 
          </div>
          <div className="mt-4 indent-4">
            In natural units (<i>c</i> = 1), the formula expresses the identity
          </div>
          <div className="my-4 text-center pb-2 relative font-serif">
             <i>E = m</i>
             <span className="absolute right-0 top-0 text-sm">(1)</span>
          </div>
        </LatexOutput>
        <p>To typeset display-mode math you can use one of these delimiter pairs: <code>\\[ ... \\]</code>, <code>\begin{`{displaymath}`} ... \end{`{displaymath}`}</code> or <code>\begin{`{equation}`} ... \end{`{equation}`}</code>. Historically, typesetting display-mode math required use of $$ characters delimiters, as in $$ ... display math here ...$$, but this method is no longer recommended: use LaTeX’s delimiters <code>\\[ ... \\]</code> instead.</p>

        <h3 className="text-lg font-semibold text-slate-900 mt-6 pt-4 border-t">11.3 More complete examples</h3>
        <p>The following examples demonstrate a range of mathematical content typeset using LaTeX.</p>
        <CodeBlock code={`\\documentclass{article}
\\begin{document}
Subscripts in math mode are written as $a_b$ and superscripts are written as $a^b$. These can be combined and nested to write expressions such as

\\[ T^{i_1 i_2 \\dots i_p}_{j_1 j_2 \\dots j_q} = T(x^{i_1},\\dots,x^{i_p},e_{j_1},\\dots,e_{j_q}) \\]
 
We write integrals using $\\int$ and fractions using $\\frac{a}{b}$. Limits are placed on integrals using superscripts and subscripts:

\\[ \\int_0^1 \\frac{dx}{e^x} =  \\frac{e-1}{e} \\]

Lower case Greek letters are written as $\\omega$ $\\delta$ etc. while upper case Greek letters are written as $\\Omega$ $\\Delta$.

Mathematical operators are prefixed with a backslash as $\\sin(\\beta)$, $\\cos(\\alpha)$, $\\log(x)$ etc.
\\end{document}`} />
         <p>This example produces the following output:</p>
         <LatexOutput>
             <div className="indent-0 text-[15px] leading-relaxed">
             Subscripts in math mode are written as <i>a<sub>b</sub></i> and superscripts are written as <i>a<sup>b</sup></i>. These can be combined and nested to write expressions such as
             </div>
             <div className="my-4 font-serif text-center relative">
                 <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/e089d71c8936495dc89fa984cd1db43ece5565db" alt="Tensor" className="inline-block h-6" />
             </div>
             <div className="indent-0 text-[15px] leading-relaxed">
             We write integrals using ∫ and fractions using <span className="inline-flex flex-col text-[10px] w-3 items-center"><span className="border-b border-black">a</span><span>b</span></span>. Limits are placed on integrals using superscripts and subscripts:
             </div>
             <div className="my-6 text-center text-lg italic flex justify-center items-center font-serif">
             <div className="flex items-center gap-2">
                 <span className="text-3xl leading-none font-light">∫</span>
                 <div className="flex flex-col text-[10px] -ml-2 -mt-2 space-y-4">
                 <span>1</span>
                 <span>0</span>
                 </div>
                 <div className="flex flex-col text-center ml-2">
                 <span className="border-b border-slate-900 text-[15px] pb-1 mr-2 px-1">dx</span>
                 <span className="text-[15px] pt-0 mr-[0.4rem]">e<sup>x</sup></span>
                 </div>
                 <span>=</span>
                 <div className="flex flex-col text-center ml-2">
                 <span className="border-b border-slate-900 text-[15px] pb-1 px-1">e - 1</span>
                 <span className="text-[15px] pt-0">e</span>
                 </div>
             </div>
             </div>
             <div className="indent-0 text-[15px] leading-relaxed mt-4">
                 Lower case Greek letters are written as ω δ etc. while upper case Greek letters are written as Ω Δ.
             </div>
             <div className="indent-4 text-[15px] leading-relaxed mt-4">
                 Mathematical operators are prefixed with a backslash as sin(β), cos(α), log(x) etc.
             </div>
         </LatexOutput>
         <p>
            The next example uses the equation* environment which is provided by the amsmath package, so we need to add the following line to our document preamble:
         </p>
         <CodeBlock code={`\\usepackage{amsmath}% For the equation* environment`} />
         <p>For further information on using amsmath see our help article.</p>
         <CodeBlock code={`\\documentclass{article}
\\usepackage{amsmath}% For the equation* environment
\\begin{document}
\\section{First example}

The well-known Pythagorean theorem \\(x^2 + y^2 = z^2\\) was proved to be invalid for other exponents, meaning the next equation has no integer solutions for \\(n>2\\):

\\[ x^n + y^n = z^n \\]

\\section{Second example}

This is a simple math expression \\(\\sqrt{x^2+1}\\) inside text. 
And this is also the same: 
\\begin{math}
\\sqrt{x^2+1}
\\end{math}
but by using another command.

This is a simple math expression without numbering
\\[\\sqrt{x^2+1}\\] 
separated from text.

This is also the same:
\\begin{displaymath}
\\sqrt{x^2+1}
\\end{displaymath}

\\dots and this:
\\begin{equation*}
\\sqrt{x^2+1}
\\end{equation*}
\\end{document}`} />
         <p>The possibilities with math in LaTeX are endless so be sure to visit our help pages for advice and examples on specific topics.</p>
      </div>
    )
  },
  {
    id: 'document-structure',
    title: '12 Basic document structure',
    icon: <Layout className="w-5 h-5" />,
    content: (
      <div className="space-y-4 text-slate-700">
        <p>Next, we explore abstracts and how to partition a LaTeX document into different chapters, sections and paragraphs.</p>
        
        <h3 className="text-lg font-semibold text-slate-900 mt-6 pt-4">12.1 Abstracts</h3>
        <p>Scientific articles usually provide an abstract which is a brief overview/summary of their core topics, or arguments. The next example demonstrates typesetting an abstract using LaTeX’s abstract environment:</p>
        <CodeBlock code={`\\documentclass{article}
\\begin{document}
\\begin{abstract}
This is a simple paragraph at the beginning of the 
document. A brief introduction about the main subject.
\\end{abstract}
\\end{document}`} />
        <p>This example produces the following output:</p>
        <LatexOutput>
           <div className="text-center mb-6 mt-2">
              <h4 className="font-bold mb-2">Abstract</h4>
              <p className="text-sm px-8">This is a simple paragraph at the beginning of the document. A brief introduction about the main subject.</p>
           </div>
        </LatexOutput>
        
        <h3 className="text-lg font-semibold text-slate-900 mt-6 pt-4 border-t">12.2 Paragraphs and new lines</h3>
        <p>With the abstract in place, we can begin writing our first paragraph. The next example demonstrates:</p>
        <ul className="list-disc pl-5 space-y-1">
            <li>how a new paragraph is created by pressing the "enter" key twice, ending the current line and inserting a subsequent blank line;</li>
            <li>how to start a new line without starting a new paragraph by inserting a manual line break using the <code>\\</code> command, which is a double backslash; alternatively, use the <code>\newline</code> command.</li>
        </ul>
        <p>The third paragraph in this example demonstrates use of the commands <code>\\</code> and <code>\newline</code>:</p>
        <CodeBlock code={`\\documentclass{article}
\\begin{document}

\\begin{abstract}
This is a simple paragraph at the beginning of the 
document. A brief introduction about the main subject.
\\end{abstract}

After our abstract we can begin the first paragraph, then press \`\`enter'' twice to start the second one.

This line will start a second paragraph.

I will start the third paragraph and then add \\\\ a manual line break which causes this text to start on a new line but remains part of the same paragraph. Alternatively, I can use the \\verb|\\newline|\\newline command to start a new line, which is also part of the same paragraph.
\\end{document}`} />
        <p>Note how LaTeX automatically indents paragraphs—except immediately after document headings such as section and subsection—as we will see.</p>
        <p>New users are advised that multiple <code>\\</code> or <code>\newline</code>s should not be used to “simulate” paragraphs with larger spacing between them because this can interfere with LaTeX’s typesetting algorithms. The recommended method is to continue using blank lines for creating new paragraphs, without any <code>\\</code>, and load the parskip package by adding <code>\usepackage{`{parskip}`}</code> to the preamble.</p>
        
        <h3 className="text-lg font-semibold text-slate-900 mt-6 pt-4 border-t">12.3 Chapters and sections</h3>
        <p>Longer documents, irrespective of authoring software, are usually partitioned into parts, chapters, sections, subsections and so forth. LaTeX also provides document-structuring commands but the available commands, and their implementations (what they do), can depend on the document class being used. By way of example, documents created using the book class can be split into parts, chapters, sections, subsections and so forth but the letter class does not provide (support) any commands to do that.</p>
        <p>This next example demonstrates commands used to structure a document based on the book class:</p>
        <CodeBlock code={`\\documentclass{book}
\\begin{document}

\\chapter{First Chapter}

\\section{Introduction}

This is the first section.

Lorem  ipsum  dolor  sit  amet,  consectetuer  adipiscing  
elit. Etiam  lobortisfacilisis sem.  Nullam nec mi et 
neque pharetra sollicitudin.  Praesent imperdietmi nec ante. 
Donec ullamcorper, felis non sodales...

\\section{Second Section}

Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  
Etiam lobortis facilisissem.  Nullam nec mi et neque pharetra 
sollicitudin.  Praesent imperdiet mi necante...

\\subsection{First Subsection}
Praesent imperdietmi nec ante. Donec ullamcorper, felis non sodales...

\\section*{Unnumbered Section}
Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  
Etiam lobortis facilisissem...
\\end{document}`} />
        <p>This example produces the following output:</p>
        <LatexOutput>
           <h3 className="font-bold text-lg mt-6 mb-2">1.1 &nbsp;&nbsp;Introduction</h3>
           <div className="indent-0">
             This is the first section.
           </div>
           <div className="indent-4">
             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam lobortisfacilisis sem. Nullam nec mi et neque pharetra sollicitudin. Praesent imperdietmi nec ante. Donec ullamcorper, felis non sodales...
           </div>
           
           <h3 className="font-bold text-lg mt-6 mb-2">1.2 &nbsp;&nbsp;Second Section</h3>
           <div className="indent-0">
             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam lobortis facilisissem. Nullam nec mi et neque pharetra sollicitudin. Praesent imperdiet mi necante...
           </div>

           <h4 className="font-bold mt-4 mb-2">1.2.1 &nbsp;&nbsp;First Subsection</h4>
           <div className="indent-0">
               Praesent imperdietmi nec ante. Donec ullamcorper, felis non sodales...
           </div>

           <h3 className="font-bold text-lg mt-6 mb-2">Unnumbered Section</h3>
           <div className="indent-0">
             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam lobortis facilisissem...
           </div>
        </LatexOutput>
        <p>The names of sectioning commands are mostly self-explanatory; for example, <code>\chapter{`{First Chapter}`}</code> creates a new chapter titled First Chapter, <code>\section{`{Introduction}`}</code> produces a section titled Introduction, and so forth. Sections can be further divided into <code>\subsection{`{...}`}</code> and even <code>\subsubsection{`{...}`}</code>. The numbering of sections, subsections etc. is automatic but can be disabled by using the so-called starred version of the appropriate command which has an asterisk (*) at the end, such as <code>\section*{`{...}`}</code> and <code>\subsection*{`{...}`}</code>.</p>
        <p>Collectively, LaTeX document classes provide the following sectioning commands, with specific classes each supporting a relevant subset:</p>
        <ul className="list-disc pl-5">
            <li><code>\part{`{part}`}</code></li>
            <li><code>\chapter{`{chapter}`}</code></li>
            <li><code>\section{`{section}`}</code></li>
            <li><code>\subsection{`{subsection}`}</code></li>
            <li><code>\subsubsection{`{subsubsection}`}</code></li>
            <li><code>\paragraph{`{paragraph}`}</code></li>
            <li><code>\subparagraph{`{subparagraph}`}</code></li>
        </ul>
        <p>In particular, the \part and \chapter commands are only available in the report and book document classes.</p>
      </div>
    )
  },
  {
    id: 'tables',
    title: '13 Creating tables',
    icon: <Layout className="w-5 h-5" />,
    content: (
      <div className="space-y-4 text-slate-700">
        <p>Overleaf provides three options to create tables:</p>
        <ol className="list-decimal pl-5 space-y-1">
            <li>Using the Insert Table button in the Visual Editor (or Code Editor) toolbar.</li>
            <li>Copying and pasting a table from another document while using Visual Editor.</li>
            <li>Writing the LaTeX code for the table in Code Editor.</li>
        </ol>
        <p>If you’re new to LaTeX, using the toolbar in Visual Editor (option 1) is a great way to get started—you can switch between Visual Editor and Code Editor to see the code behind the table. Here, we focus on option 3—the most flexible method for creating tables—and provide examples that demonstrate how to create tables in LaTeX, including the addition of lines (rules) and captions.</p>
        
        <h3 className="text-lg font-semibold text-slate-900 mt-6 pt-4">13.1 Creating a basic table in LaTeX</h3>
        <p>We start with an example showing how to typeset a basic table:</p>
        <CodeBlock code={`\\begin{center}
\\begin{tabular}{c c c}
 cell1 & cell2 & cell3 \\\\ 
 cell4 & cell5 & cell6 \\\\  
 cell7 & cell8 & cell9    
\\end{tabular}
\\end{center}`} />
        <p>The <code>tabular</code> environment is the default LaTeX method to create tables. You must specify a parameter to this environment, in this case <code>{`{c c c}`}</code> which advises LaTeX that there will be three columns and the text inside each one must be centred. You can also use r to right-align the text and l to left-align it. The alignment symbol & is used to demarcate individual table cells within a table row. To end a table row use the new line command \\. Our table is contained within a center environment to make it centred within the text width of the page.</p>
        
        <h3 className="text-lg font-semibold text-slate-900 mt-6 pt-4 border-t">13.2 Adding borders</h3>
        <p>The tabular environment supports horizontal and vertical lines (rules) as part of the table:</p>
        <ul className="list-disc pl-5">
            <li>to add horizontal rules, above and below rows, use the <code>\hline</code> command</li>
            <li>to add vertical rules, between columns, use the vertical line parameter |</li>
        </ul>
        <p>In this example the argument is <code>{`{|c|c|c|}`}</code> which declares three (centred) columns each separated by a vertical line (rule); in addition, we use <code>\hline</code> to place a horizontal rule above the first row and below the final row:</p>
        <CodeBlock code={`\\begin{center}
\\begin{tabular}{|c|c|c|} 
 \\hline
 cell1 & cell2 & cell3 \\\\ 
 cell4 & cell5 & cell6 \\\\ 
 cell7 & cell8 & cell9 \\\\ 
 \\hline
\\end{tabular}
\\end{center}`} />
        <p>This example produces the following output:</p>
        <LatexOutput>
          <div className="flex justify-center my-6">
            <table className="border-collapse border border-slate-900 font-serif text-center">
              <tbody>
                <tr>
                  <td className="border border-slate-900 px-4 py-1">cell1</td>
                  <td className="border border-slate-900 px-4 py-1">cell2</td>
                  <td className="border border-slate-900 px-4 py-1">cell3</td>
                </tr>
                <tr>
                  <td className="border border-slate-900 px-4 py-1">cell4</td>
                  <td className="border border-slate-900 px-4 py-1">cell5</td>
                  <td className="border border-slate-900 px-4 py-1">cell6</td>
                </tr>
                <tr>
                  <td className="border border-slate-900 px-4 py-1">cell7</td>
                  <td className="border border-slate-900 px-4 py-1">cell8</td>
                  <td className="border border-slate-900 px-4 py-1">cell9</td>
                </tr>
              </tbody>
            </table>
          </div>
        </LatexOutput>
        
        <p>Here is a further example:</p>
        <CodeBlock code={`\\begin{center}
 \\begin{tabular}{||c c c c||} 
 \\hline
 Col1 & Col2 & Col2 & Col3 \\\\ [0.5ex] 
 \\hline\\hline
 1 & 6 & 87837 & 787 \\\\ 
 \\hline
 2 & 7 & 78 & 5415 \\\\
 \\hline
 3 & 545 & 778 & 7507 \\\\
 \\hline
 4 & 545 & 18744 & 7560 \\\\
 \\hline
 5 & 88 & 788 & 6344 \\\\ [1ex] 
 \\hline
\\end{tabular}
\\end{center}`} />

        <h3 className="text-lg font-semibold text-slate-900 mt-6 pt-4 border-t">13.3 Captions, labels and references</h3>
        <p>You can caption and reference tables in much the same way as images. The only difference is that instead of the figure environment, you use the table environment.</p>
        <CodeBlock code={`Table \\ref{table:data} shows how to add a table caption and reference a table.
\\begin{table}[h!]
\\centering
\\begin{tabular}{||c c c c||} 
 \\hline
 Col1 & Col2 & Col2 & Col3 \\\\ [0.5ex] 
 \\hline\\hline
 1 & 6 & 87837 & 787 \\\\ 
 2 & 7 & 78 & 5415 \\\\
 3 & 545 & 778 & 7507 \\\\
 4 & 545 & 18744 & 7560 \\\\
 5 & 88 & 788 & 6344 \\\\ [1ex] 
 \\hline
\\end{tabular}
\\caption{Table to test captions and labels.}
\\label{table:data}
\\end{table}`} />
      </div>
    )
  },
  {
    id: 'table-of-contents',
    title: '14 Adding a Table of Contents',
    icon: <List className="w-5 h-5" />,
    content: (
      <div className="space-y-4 text-slate-700">
        <p>Creating a table of contents is straightforward because the command <code>\tableofcontents</code> does almost all the work for you:</p>
        <CodeBlock code={`\\documentclass{article}
\\title{Sections and Chapters}
\\author{Gubert Farnsworth}
\\date{August 2022}
\\begin{document}
  
\\maketitle
  
\\tableofcontents

\\section{Introduction}
   
This is the first section.
      
Lorem  ipsum  dolor  sit  amet,  consectetuer  adipiscing  
elit.   Etiam  lobortisfacilisis sem.  Nullam nec mi et 
neque pharetra sollicitudin...
       
\\section*{Unnumbered Section}
\\addcontentsline{toc}{section}{Unnumbered Section}

Lorem ipsum dolor sit amet, consectetuer adipiscing elit...

\\section{Second Section}
       
Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
\\end{document}`} />
        <p>This example produces the following output:</p>
        <LatexOutput>
          <h2 className="font-bold text-xl mb-6">Contents</h2>
          <div className="space-y-2">
            <div className="flex items-end mx-auto">
              <span>1<span className="ml-4">Introduction</span></span>
              <span className="flex-grow border-b border-dotted border-slate-600 mx-2 mb-1"></span>
              <span>1</span>
            </div>
            <div className="flex items-end mx-auto">
              <span className="ml-6 flex-shrink-0">Unnumbered Section</span>
              <span className="flex-grow border-b border-dotted border-slate-600 mx-2 mb-1"></span>
              <span>2</span>
            </div>
            <div className="flex items-end mx-auto">
              <span>2<span className="ml-4">Second Section</span></span>
              <span className="flex-grow border-b border-dotted border-slate-600 mx-2 mb-1"></span>
              <span>3</span>
            </div>
          </div>
        </LatexOutput>
        <p>Sections, subsections and chapters are automatically included in the table of contents. To manually add entries, such as an unnumbered section, use the command <code>\addcontentsline</code> as shown in the example.</p>
      </div>
    )
  },
  {
    id: 'downloading',
    title: '15 Downloading your finished document',
    icon: <Download className="w-5 h-5" />,
    content: (
      <div className="space-y-4 text-slate-700">
        <p>The following brief video clip shows how to download your project’s source code or the typeset PDF file:</p>
        <div className="mt-8 overflow-hidden rounded-xl bg-slate-900 border border-slate-800 shadow-xl aspect-video w-full max-w-3xl">
           <iframe 
             src="https://cdn.imgchest.com/files/e0c8b6938858.mp4" 
             title="Download LaTeX project" 
             className="w-full h-full"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
             allowFullScreen 
           />
        </div>
        <p>More information can be found in the Overleaf help article Exporting your work from Overleaf.</p>
      </div>
    )
  },
  {
    id: 'packages',
    title: '16 Finding and using LaTeX packages',
    icon: <Package className="w-5 h-5" />,
    content: (
      <div className="space-y-4 text-slate-700">
        <p>
          LaTeX not only delivers significant typesetting capabilities but also provides a framework for extensibility through the use of add-on packages. Rather than attempting to provide commands and features that “try to do everything”, LaTeX is designed to be extensible, allowing users to load external bodies of code (packages) that provide more specialist typesetting capabilities or extend LaTeX’s built-in features—such as typesetting tables. As observed in the section Adding images, the graphicx package extends LaTeX by providing commands to import graphics files and was loaded (in the preamble) by writing
        </p>
        <CodeBlock code={`\\usepackage{graphicx}`} />
        
        <h3 className="text-lg font-semibold text-slate-900 mt-6 pt-4">16.1 Loading packages</h3>
        <p>As noted above, packages are loaded in the document preamble via the <code>\usepackage</code> command but because (many) LaTeX packages provide a set of options, which can be used to configure their behaviour, the <code>\usepackage</code> command often looks like this:</p>
        <CodeBlock code={`\\usepackage[options]{somepackage}`} />
        <p>The square brackets “[...]” inform LaTeX which set of options should be applied when it loads somepackage. Within the set of options requested by the user, individual options, or settings, are typically separated by a comma; for example, the geometry package provides many options to configure page layout in LaTeX, so a typical use of geometry might look like this:</p>
        <CodeBlock code={`\\usepackage[total={6.5in,8.75in},
top=1.2in, left=0.9in, includefoot]{geometry}`} />
        <p>The geometry package is one example of a package written and contributed by members of the global LaTeX community and made available, for free, to anyone who wants to use it.</p>
        <p>If a LaTeX package does not provide any options, or the user wants to use the default values of a package’s options, it would be loaded like this:</p>
        <CodeBlock code={`\\usepackage{somepackage}`} />
        <p>When you write <code>\usepackage[...]{`{somepackage}`}</code> LaTeX looks for a corresponding file called somepackage.sty, which it needs to load and process—to make the package commands available and execute any other code provided by that package. If LaTeX cannot find somepackage.sty it will terminate with an error, as demonstrated in the following Overleaf example:</p>
        <CodeBlock code={`\\documentclass[12pt, letterpaper]{article}
\\usepackage{somepackage}% a NON-EXISTENT package
\\begin{document}
This will fail!
\\end{document}`} />

        <h3 className="text-lg font-semibold text-slate-900 mt-6 pt-4 border-t">16.2 Finding information about packages: CTAN</h3>
        <p>Packages are distributed through the Comprehensive TeX Archive Network, usually referred to as CTAN, which, at the time of writing, hosts 6287 packages from 2881 contributors. CTAN describes itself as</p>
        <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-600 my-4">
             ... a set of Internet sites around the world that offer TEX-related material for download.
        </blockquote>
        <p>You can browse CTAN to look for useful packages; for example: by topic, alphabetically (useful if you know the package name). You can also use the search facility (at the top of the page).</p>
        
        <h3 className="text-lg font-semibold text-slate-900 mt-6 pt-4 border-t">16.3 Packages available on Overleaf: Introducing TeX Live</h3>
        <p>Once per year a (large) subset of packages hosted on CTAN, plus LaTeX-related fonts and other software, is collated and distributed as a system called TeX Live, which can be used to install your own (local) LaTeX setup. In fact, Overleaf’s servers also use TeX Live and are updated when a new version of TeX Live is released. Overleaf’s TeX Live updates are not immediate but take place a few months post-release, giving us time to perform compatibility tests of the new TeX Live version with the thousands of templates contained in our gallery. For example, here is our TeX Live 2025 upgrade announcement.</p>
        <p>Although TeX Live contains a (large) subset of CTAN packages it is possible to find an interesting package, such as igo for typesetting Go diagrams, which is hosted on CTAN but not included in (distributed by) TeX Live and thus unavailable on Overleaf. Some packages hosted on CTAN are not part of TeX Live due to a variety of reasons: perhaps a package is obsolete, has licensing problems, is extremely new (recently uploaded) or has platform dependencies, such as working on Windows but not Linux.</p>
        <p>New packages, and updates to existing ones, are uploaded to CTAN all year round but updates to TeX Live are distributed annually; consequently, packages contained in the current version of TeX Live will not be as up-to-date as those hosted on CTAN. Because Overleaf’s servers use TeX Live it is possible that packages installed on our servers—i.e., ones available to our users—might not be the very latest versions available on CTAN but, generally, this is unlikely to be problematic.</p>
      </div>
    )
  }
];
