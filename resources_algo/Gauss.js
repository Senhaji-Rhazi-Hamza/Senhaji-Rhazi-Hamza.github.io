<div class="element" name="Gauss">

  <div class="cell border-box-sizing text_cell rendered">
    <div class="prompt input_prompt">
    </div>
    <div class="inner_cell">
      <div class="text_cell_render border-box-sizing rendered_html">
        <h2 id="Gauss-Method">Gauss Method<a class="anchor-link" href="#Gauss-Method">&#182;</a></h2>
      </div>
    </div>
  </div>
  <div class="cell border-box-sizing text_cell rendered">
    <div class="prompt input_prompt">
    </div>
    <div class="inner_cell">
      <div class="text_cell_render border-box-sizing rendered_html">
        <p>This is Gauss method elimination for solving systems $AX=b$ by solving an easier equivalent
          system $TX = b^{'}$ where T is a triangular matrix.
          for example we have the system</p>
        <p>$\begin{cases} -2x + y + -z = 8 \;\; (L1) \\ -3x – y + 2z = -11 \;\;(L2) \\ -2x + y + -2z = -3 \;\;(L3)\end{cases}$ which can be rewritten : $\begin{pmatrix}
          -2 &amp; 1 &amp; -1 \\
          -3 &amp; -1 &amp; 2 \\
          -2 &amp; 1 &amp; -2
          \end{pmatrix} \begin{pmatrix}
          x \\
          y \\
          z
          \end{pmatrix}= \begin{pmatrix}
          8 \\
          -11 \\
          3
          \end{pmatrix}$</p>
        <p>When you have linear system and you do linear operations between lines $L_i$ or columns $C_i$ the system obtained stay equivalent so this algorithm do the necessary linear operation to move from $A$ to $T$
          the algorithm is expressed as follow at each $kth$ matrix iteration : <br />
          for $A \in M_n(R)$ $\forall i \in \; [k,n] L_i^{(k+1)} = L_i^{(k)} - m_i^{(k)} L_k$ where $m_i^{(k)} = \frac{a_{ik}}{a_{kk}}$ <br> Note that $a_{kk}$ is called the pivot and $k \in [2, n]$</p>
        <p>for more detail check wikipedia <a href="https://en.wikipedia.org/wiki/Gaussian_elimination">link</a></p>

      </div>
    </div>
  </div>
  <div class="cell border-box-sizing code_cell rendered">
    <div class="input">
      <div class="prompt input_prompt">In&nbsp;[1]:</div>
      <div class="inner_cell">
        <div class="input_area">
          <div class=" highlight hl-ipython3">
            <pre><span></span><span class="c1"># Let code the Gauss method</span>
<span class="kn">import</span> <span class="nn">numpy</span> <span class="k">as</span> <span class="nn">np</span>
<span class="n">A</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">([[</span><span class="o">-</span><span class="mi">2</span><span class="p">,</span><span class="mi">1</span><span class="p">,</span><span class="o">-</span><span class="mi">1</span><span class="p">],[</span><span class="o">-</span><span class="mi">3</span><span class="p">,</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span><span class="mi">2</span><span class="p">],[</span><span class="o">-</span><span class="mi">2</span><span class="p">,</span><span class="mi">1</span><span class="p">,</span><span class="mi">2</span><span class="p">]])</span>
<span class="n">b</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">([</span><span class="mi">8</span><span class="p">,</span> <span class="o">-</span><span class="mi">11</span><span class="p">,</span> <span class="o">-</span><span class="mi">3</span><span class="p">])</span><span class="o">.</span><span class="n">reshape</span><span class="p">(</span><span class="mi">3</span><span class="p">,</span><span class="mi">1</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">&quot;Matrix A</span><span class="se">\n</span><span class="s2">&quot;</span><span class="p">,</span><span class="n">A</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">&quot;</span><span class="se">\n</span><span class="s2">Vector b</span><span class="se">\n</span><span class="s2">&quot;</span><span class="p">,</span><span class="n">b</span><span class="p">)</span>
</pre>
          </div>

        </div>
      </div>
    </div>

    <div class="output_wrapper">
      <div class="output">


        <div class="output_area">

          <div class="prompt"></div>


          <div class="output_subarea output_stream output_stdout output_text">
            <pre>Matrix A
 [[-2  1 -1]
 [-3 -1  2]
 [-2  1  2]]

Vector b
 [[  8]
 [-11]
 [ -3]]
</pre>
          </div>
        </div>

      </div>
    </div>

  </div>
  <div class="cell border-box-sizing code_cell rendered">
    <div class="input">
      <div class="prompt input_prompt">In&nbsp;[2]:</div>
      <div class="inner_cell">
        <div class="input_area">
          <div class=" highlight hl-ipython3">
            <pre><span></span><span class="c1"># we stack the matrix as we can do the lines operations in one time</span>
<span class="n">stackA</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">hstack</span><span class="p">((</span><span class="n">A</span><span class="p">,</span><span class="n">b</span><span class="p">))</span>
<span class="n">stackA</span>
</pre>
          </div>

        </div>
      </div>
    </div>

    <div class="output_wrapper">
      <div class="output">


        <div class="output_area">

          <div class="prompt output_prompt">Out[2]:</div>




          <div class="output_text output_subarea output_execute_result">
            <pre>array([[ -2,   1,  -1,   8],
       [ -3,  -1,   2, -11],
       [ -2,   1,   2,  -3]])</pre>
          </div>

        </div>

      </div>
    </div>

  </div>
  <div class="cell border-box-sizing code_cell rendered">
    <div class="input">
      <div class="prompt input_prompt">In&nbsp;[3]:</div>
      <div class="inner_cell">
        <div class="input_area">
          <div class=" highlight hl-ipython3">
            <pre><span></span><span class="k">def</span> <span class="nf">gauss</span><span class="p">(</span><span class="n">stackA</span><span class="p">):</span>
    <span class="c1">#we convert to np.float 64 because we do divisions that convert thing in float, so to avoid int cast we make it float</span>
    <span class="n">T</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="n">stackA</span><span class="p">)</span><span class="o">.</span><span class="n">astype</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">float64</span><span class="p">)</span>
    <span class="k">for</span> <span class="n">k</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="n">T</span><span class="o">.</span><span class="n">shape</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">-</span> <span class="mi">1</span><span class="p">):</span>
        <span class="n">p</span> <span class="o">=</span> <span class="mi">0</span>
        <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="n">k</span> <span class="o">+</span> <span class="mi">1</span><span class="p">,</span><span class="n">T</span><span class="o">.</span><span class="n">shape</span><span class="p">[</span><span class="mi">0</span><span class="p">]):</span>
            <span class="n">m</span> <span class="o">=</span> <span class="n">T</span><span class="p">[</span><span class="n">i</span><span class="p">,</span><span class="n">k</span><span class="p">]</span><span class="o">/</span><span class="n">T</span><span class="p">[</span><span class="n">k</span><span class="p">,</span><span class="n">k</span><span class="p">]</span>
            <span class="n">el</span> <span class="o">=</span> <span class="n">T</span><span class="p">[</span><span class="n">i</span><span class="p">]</span> <span class="o">-</span> <span class="p">(</span><span class="n">T</span><span class="p">[</span><span class="n">k</span><span class="p">]</span> <span class="o">*</span> <span class="n">m</span><span class="p">)</span>
            <span class="n">T</span><span class="p">[</span><span class="n">i</span><span class="p">]</span> <span class="o">+=</span>  <span class="o">-</span> <span class="p">(</span><span class="n">T</span><span class="p">[</span><span class="n">k</span><span class="p">]</span> <span class="o">*</span> <span class="n">m</span><span class="p">)</span>
    <span class="k">return</span> <span class="n">T</span>

</pre>
          </div>

        </div>
      </div>
    </div>

  </div>
  <div class="cell border-box-sizing code_cell rendered">
    <div class="input">
      <div class="prompt input_prompt">In&nbsp;[4]:</div>
      <div class="inner_cell">
        <div class="input_area">
          <div class=" highlight hl-ipython3">
            <pre><span></span><span class="n">T</span> <span class="o">=</span> <span class="n">gauss</span><span class="p">(</span><span class="n">stackA</span><span class="p">)</span>
<span class="c1">#Triangulat uppper matrix</span>
<span class="n">T</span>
</pre>
          </div>

        </div>
      </div>
    </div>

    <div class="output_wrapper">
      <div class="output">


        <div class="output_area">

          <div class="prompt output_prompt">Out[4]:</div>




          <div class="output_text output_subarea output_execute_result">
            <pre>array([[ -2. ,   1. ,  -1. ,   8. ],
       [  0. ,  -2.5,   3.5, -23. ],
       [  0. ,   0. ,   3. , -11. ]])</pre>
          </div>

        </div>

      </div>
    </div>

  </div>
  <div class="cell border-box-sizing code_cell rendered">
    <div class="input">
      <div class="prompt input_prompt">In&nbsp;[6]:</div>
      <div class="inner_cell">
        <div class="input_area">
          <div class=" highlight hl-ipython3">
            <pre><span></span><span class="k">def</span> <span class="nf">solve</span><span class="p">(</span><span class="n">T</span><span class="p">,</span> <span class="n">b0</span><span class="p">):</span>
    <span class="n">n</span> <span class="o">=</span> <span class="nb">len</span><span class="p">(</span><span class="n">b0</span><span class="p">)</span>
    <span class="c1">#we solve the last esuation (line) in the matrix</span>
    <span class="n">X</span> <span class="o">=</span> <span class="p">[</span><span class="n">b0</span><span class="p">[</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span><span class="o">/</span><span class="n">T</span><span class="p">[</span><span class="n">n</span> <span class="o">-</span> <span class="mi">1</span><span class="p">,</span> <span class="n">n</span> <span class="o">-</span> <span class="mi">1</span><span class="p">]]</span>
    <span class="c1">#we go upper to solve the equations above using the last variable solved</span>
    <span class="k">for</span> <span class="n">k</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="n">n</span> <span class="o">-</span> <span class="mi">2</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span><span class="o">-</span><span class="mi">1</span><span class="p">):</span>
        <span class="n">a</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">sum</span><span class="p">([</span><span class="n">X</span><span class="p">[(</span><span class="n">n</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span> <span class="o">-</span> <span class="n">i</span><span class="p">]</span> <span class="o">*</span> <span class="n">T</span><span class="p">[</span><span class="n">k</span> <span class="p">,</span> <span class="n">i</span><span class="p">]</span> <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="n">n</span> <span class="o">-</span> <span class="mi">1</span><span class="p">,</span> <span class="n">k</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">)])</span>
        <span class="n">term</span> <span class="o">=</span> <span class="p">(</span><span class="mi">1</span><span class="o">/</span><span class="p">(</span><span class="n">T</span><span class="p">[</span><span class="n">k</span><span class="p">,</span><span class="n">k</span><span class="p">]))</span> <span class="o">*</span> <span class="p">(</span><span class="n">b0</span><span class="p">[</span><span class="n">k</span><span class="p">]</span> <span class="o">-</span> <span class="n">a</span><span class="p">)</span>
        <span class="n">X</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">term</span><span class="p">)</span>
    <span class="c1"># we reverse W because, we solve it from down to up</span>
    <span class="k">return</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="n">X</span><span class="p">[::</span><span class="o">-</span><span class="mi">1</span><span class="p">])</span><span class="o">.</span><span class="n">reshape</span><span class="p">(</span><span class="n">n</span><span class="p">,</span><span class="mi">1</span><span class="p">)</span>
</pre>
          </div>

        </div>
      </div>
    </div>

  </div>
  <div class="cell border-box-sizing code_cell rendered">
    <div class="input">
      <div class="prompt input_prompt">In&nbsp;[7]:</div>
      <div class="inner_cell">
        <div class="input_area">
          <div class=" highlight hl-ipython3">
            <pre><span></span><span class="n">X</span> <span class="o">=</span> <span class="n">solve</span><span class="p">(</span><span class="n">T</span><span class="p">[:,:</span><span class="mi">3</span><span class="p">],</span> <span class="n">T</span><span class="p">[:,</span><span class="mi">3</span><span class="p">:])</span>
<span class="n">a</span> <span class="o">=</span> <span class="p">(</span><span class="n">A</span> <span class="o">@</span> <span class="n">X</span><span class="p">)</span><span class="o">.</span><span class="n">astype</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">float</span><span class="p">)</span>
<span class="n">b</span> <span class="o">=</span> <span class="n">b</span><span class="o">.</span><span class="n">astype</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">float</span><span class="p">)</span>
</pre>
          </div>

        </div>
      </div>
    </div>

  </div>
  <div class="cell border-box-sizing code_cell rendered">
    <div class="input">
      <div class="prompt input_prompt">In&nbsp;[8]:</div>
      <div class="inner_cell">
        <div class="input_area">
          <div class=" highlight hl-ipython3">
            <pre><span></span><span class="c1"># We use np.allclose because we manipulate float and we have some small imprecisions that make the test equality fail</span>
<span class="n">np</span><span class="o">.</span><span class="n">allclose</span><span class="p">(</span><span class="n">a</span><span class="p">,</span><span class="n">b</span><span class="p">)</span>
</pre>
          </div>

        </div>
      </div>
    </div>

    <div class="output_wrapper">
      <div class="output">


        <div class="output_area">

          <div class="prompt output_prompt">Out[8]:</div>




          <div class="output_text output_subarea output_execute_result">
            <pre>True</pre>
          </div>

        </div>

      </div>
    </div>

  </div>
  <div class="cell border-box-sizing text_cell rendered">
    <div class="prompt input_prompt">
    </div>
    <div class="inner_cell">
      <div class="text_cell_render border-box-sizing rendered_html">
        <p>So now you are happy i guess, you know how to solve a system with a complexity of $O_3$, congratulations,
          but you're not totally up to it, what if the pivot $a_{kk} = 0$ how you handle it ?</p>
        <p>Do'nt worry you simply permut the lines (or columns) in order to not have $a_{kk} = 0$,more than that
          is better to permut each time to have the bigest (in absolute value) $a_{kk}$ possible to have more stable divisions, so we are going to modify slightly
          the preceding algorithm</p>
        <p>for more information about permutation matrix see wikipedia <a href="https://en.wikipedia.org/wiki/Permutation_matrix">link</a></p>

      </div>
    </div>
  </div>
  <div class="cell border-box-sizing code_cell rendered">
    <div class="input">
      <div class="prompt input_prompt">In&nbsp;[9]:</div>
      <div class="inner_cell">
        <div class="input_area">
          <div class=" highlight hl-ipython3">
            <pre><span></span><span class="c1">#This a permutation Matrix P that when multiplied by M, we permut for M the ith and jth line</span>
<span class="k">def</span> <span class="nf">permutation_matrix</span><span class="p">(</span><span class="n">rang</span><span class="p">,</span> <span class="n">i</span><span class="p">,</span> <span class="n">j</span><span class="p">):</span>
    <span class="n">P</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">identity</span><span class="p">(</span><span class="n">rang</span><span class="p">)</span><span class="o">.</span><span class="n">astype</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">float64</span><span class="p">)</span>
    <span class="n">tmp</span> <span class="o">=</span> <span class="n">P</span><span class="p">[</span><span class="n">j</span><span class="p">]</span><span class="o">.</span><span class="n">copy</span><span class="p">()</span>
    <span class="n">P</span><span class="p">[</span><span class="n">j</span><span class="p">]</span> <span class="o">=</span> <span class="n">P</span><span class="p">[</span><span class="n">i</span><span class="p">]</span><span class="o">.</span><span class="n">copy</span><span class="p">()</span>
    <span class="n">P</span><span class="p">[</span><span class="n">i</span><span class="p">]</span> <span class="o">=</span> <span class="n">tmp</span>
    <span class="k">return</span> <span class="n">P</span>
</pre>
          </div>

        </div>
      </div>
    </div>

  </div>
  <div class="cell border-box-sizing code_cell rendered">
    <div class="input">
      <div class="prompt input_prompt">In&nbsp;[10]:</div>
      <div class="inner_cell">
        <div class="input_area">
          <div class=" highlight hl-ipython3">
            <pre><span></span><span class="n">M</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">([[</span><span class="n">i</span> <span class="o">+</span> <span class="n">j</span> <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">4</span><span class="p">)</span> <span class="p">]</span> <span class="k">for</span> <span class="n">j</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">4</span><span class="p">)])</span>
<span class="n">M</span>
</pre>
          </div>

        </div>
      </div>
    </div>

    <div class="output_wrapper">
      <div class="output">


        <div class="output_area">

          <div class="prompt output_prompt">Out[10]:</div>




          <div class="output_text output_subarea output_execute_result">
            <pre>array([[0, 1, 2, 3],
       [1, 2, 3, 4],
       [2, 3, 4, 5],
       [3, 4, 5, 6]])</pre>
          </div>

        </div>

      </div>
    </div>

  </div>
  <div class="cell border-box-sizing code_cell rendered">
    <div class="input">
      <div class="prompt input_prompt">In&nbsp;[11]:</div>
      <div class="inner_cell">
        <div class="input_area">
          <div class=" highlight hl-ipython3">
            <pre><span></span><span class="n">P</span> <span class="o">=</span> <span class="n">permutation_matrix</span><span class="p">(</span><span class="mi">4</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">1</span><span class="p">)</span>
<span class="n">P</span>
</pre>
          </div>

        </div>
      </div>
    </div>

    <div class="output_wrapper">
      <div class="output">


        <div class="output_area">

          <div class="prompt output_prompt">Out[11]:</div>




          <div class="output_text output_subarea output_execute_result">
            <pre>array([[0., 1., 0., 0.],
       [1., 0., 0., 0.],
       [0., 0., 1., 0.],
       [0., 0., 0., 1.]])</pre>
          </div>

        </div>

      </div>
    </div>

  </div>
  <div class="cell border-box-sizing code_cell rendered">
    <div class="input">
      <div class="prompt input_prompt">In&nbsp;[12]:</div>
      <div class="inner_cell">
        <div class="input_area">
          <div class=" highlight hl-ipython3">
            <pre><span></span><span class="n">P</span> <span class="o">@</span> <span class="n">M</span>
</pre>
          </div>

        </div>
      </div>
    </div>

    <div class="output_wrapper">
      <div class="output">


        <div class="output_area">

          <div class="prompt output_prompt">Out[12]:</div>




          <div class="output_text output_subarea output_execute_result">
            <pre>array([[1., 2., 3., 4.],
       [0., 1., 2., 3.],
       [2., 3., 4., 5.],
       [3., 4., 5., 6.]])</pre>
          </div>

        </div>

      </div>
    </div>

  </div>
  <div class="cell border-box-sizing code_cell rendered">
    <div class="input">
      <div class="prompt input_prompt">In&nbsp;[13]:</div>
      <div class="inner_cell">
        <div class="input_area">
          <div class=" highlight hl-ipython3">
            <pre><span></span><span class="k">def</span> <span class="nf">gauss_permut</span><span class="p">(</span><span class="n">stackA</span><span class="p">):</span>
    <span class="c1">#we convert to np.float 64 because we do divisions that convert thing in float, so to avoid int cast we make it float</span>
    <span class="n">T</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="n">stackA</span><span class="p">)</span><span class="o">.</span><span class="n">astype</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">float64</span><span class="p">)</span>
    <span class="k">for</span> <span class="n">k</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="n">T</span><span class="o">.</span><span class="n">shape</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">-</span> <span class="mi">1</span><span class="p">):</span>
        <span class="c1"># We add those to lines that look for the max pivot each time and do the permutations</span>
        <span class="n">j</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">argmax</span><span class="p">(</span><span class="nb">abs</span><span class="p">(</span><span class="n">T</span><span class="p">[:,</span><span class="n">k</span><span class="p">]))</span>
        <span class="n">T</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="n">permutation_matrix</span><span class="p">(</span><span class="n">T</span><span class="o">.</span><span class="n">shape</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span><span class="n">k</span><span class="p">,</span><span class="n">j</span><span class="p">)</span> <span class="o">@</span> <span class="n">T</span><span class="p">)</span>
        <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="n">k</span> <span class="o">+</span> <span class="mi">1</span><span class="p">,</span><span class="n">T</span><span class="o">.</span><span class="n">shape</span><span class="p">[</span><span class="mi">0</span><span class="p">]):</span>
            <span class="n">m</span> <span class="o">=</span> <span class="n">T</span><span class="p">[</span><span class="n">i</span><span class="p">,</span><span class="n">k</span><span class="p">]</span><span class="o">/</span><span class="n">T</span><span class="p">[</span><span class="n">k</span><span class="p">,</span><span class="n">k</span><span class="p">]</span>
            <span class="n">el</span> <span class="o">=</span> <span class="n">T</span><span class="p">[</span><span class="n">i</span><span class="p">]</span> <span class="o">-</span> <span class="p">(</span><span class="n">T</span><span class="p">[</span><span class="n">k</span><span class="p">]</span> <span class="o">*</span> <span class="n">m</span><span class="p">)</span>
            <span class="n">T</span><span class="p">[</span><span class="n">i</span><span class="p">]</span> <span class="o">+=</span>  <span class="o">-</span> <span class="p">(</span><span class="n">T</span><span class="p">[</span><span class="n">k</span><span class="p">]</span> <span class="o">*</span> <span class="n">m</span><span class="p">)</span>
    <span class="k">return</span> <span class="n">T</span>

</pre>
          </div>

        </div>
      </div>
    </div>

  </div>
  <div class="cell border-box-sizing code_cell rendered">
    <div class="input">
      <div class="prompt input_prompt">In&nbsp;[14]:</div>
      <div class="inner_cell">
        <div class="input_area">
          <div class=" highlight hl-ipython3">
            <pre><span></span><span class="c1">#np.set_printoptions(formatter={&#39;float_kind&#39;:float_formatter})</span>
</pre>
          </div>

        </div>
      </div>
    </div>

  </div>
  <div class="cell border-box-sizing code_cell rendered">
    <div class="input">
      <div class="prompt input_prompt">In&nbsp;[15]:</div>
      <div class="inner_cell">
        <div class="input_area">
          <div class=" highlight hl-ipython3">
            <pre><span></span><span class="n">T</span> <span class="o">=</span> <span class="n">gauss_permut</span><span class="p">(</span><span class="n">stackA</span><span class="p">)</span>
<span class="c1">#Triangular uppper matrix different from the previous one</span>
<span class="c1">#We use float_formatter just to reformat for obtaining nicer display</span>
<span class="n">float_formatter</span> <span class="o">=</span> <span class="k">lambda</span> <span class="n">x</span><span class="p">:</span> <span class="s2">&quot;</span><span class="si">%.2f</span><span class="s2">&quot;</span> <span class="o">%</span> <span class="n">x</span>
<span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">([[</span><span class="n">float_formatter</span><span class="p">(</span><span class="n">el</span><span class="p">)</span> <span class="k">for</span> <span class="n">el</span> <span class="ow">in</span> <span class="n">line</span><span class="p">]</span> <span class="k">for</span> <span class="n">line</span> <span class="ow">in</span> <span class="n">T</span><span class="p">])</span>
</pre>
          </div>

        </div>
      </div>
    </div>

    <div class="output_wrapper">
      <div class="output">


        <div class="output_area">

          <div class="prompt output_prompt">Out[15]:</div>




          <div class="output_text output_subarea output_execute_result">
            <pre>array([[&#39;-3.00&#39;, &#39;-1.00&#39;, &#39;2.00&#39;, &#39;-11.00&#39;],
       [&#39;0.00&#39;, &#39;1.67&#39;, &#39;-2.33&#39;, &#39;15.33&#39;],
       [&#39;0.00&#39;, &#39;0.00&#39;, &#39;3.00&#39;, &#39;-11.00&#39;]], dtype=&#39;&lt;U6&#39;)</pre>
          </div>

        </div>

      </div>
    </div>

  </div>
  <div class="cell border-box-sizing code_cell rendered">
    <div class="input">
      <div class="prompt input_prompt">In&nbsp;[16]:</div>
      <div class="inner_cell">
        <div class="input_area">
          <div class=" highlight hl-ipython3">
            <pre><span></span><span class="n">X</span> <span class="o">=</span> <span class="n">solve</span><span class="p">(</span><span class="n">T</span><span class="p">[:,:</span><span class="mi">3</span><span class="p">],</span> <span class="n">T</span><span class="p">[:,</span><span class="mi">3</span><span class="p">:])</span>
<span class="n">a</span> <span class="o">=</span> <span class="p">(</span><span class="n">A</span> <span class="o">@</span> <span class="n">X</span><span class="p">)</span><span class="o">.</span><span class="n">astype</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">float</span><span class="p">)</span>
<span class="n">b</span> <span class="o">=</span> <span class="n">b</span><span class="o">.</span><span class="n">astype</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">float</span><span class="p">)</span>
</pre>
          </div>

        </div>
      </div>
    </div>

  </div>
  <div class="cell border-box-sizing code_cell rendered">
    <div class="input">
      <div class="prompt input_prompt">In&nbsp;[17]:</div>
      <div class="inner_cell">
        <div class="input_area">
          <div class=" highlight hl-ipython3">
            <pre><span></span><span class="c1"># as expected it should be true</span>
<span class="n">np</span><span class="o">.</span><span class="n">allclose</span><span class="p">(</span><span class="n">a</span><span class="p">,</span><span class="n">b</span><span class="p">)</span>
</pre>
          </div>

        </div>
      </div>
    </div>

    <div class="output_wrapper">
      <div class="output">


        <div class="output_area">

          <div class="prompt output_prompt">Out[17]:</div>




          <div class="output_text output_subarea output_execute_result">
            <pre>True</pre>
          </div>

        </div>

      </div>
    </div>

  </div>
  <div class="cell border-box-sizing text_cell rendered">
    <div class="prompt input_prompt">
    </div>
    <div class="inner_cell">
      <div class="text_cell_render border-box-sizing rendered_html">
        <h3 id="Thank-you-!">Thank you !<a class="anchor-link" href="#Thank-you-!">&#182;</a></h3>
        <p>I whish i have puted some clarity to the gauss elimination method for you, Thank you !</p>

      </div>
    </div>
  </div>
</div>
