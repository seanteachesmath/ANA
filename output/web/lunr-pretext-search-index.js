var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  Cover Design  Sean M. Laverty    Emergency Edition 2020   www.math.uco.edu  http:\/\/www.math.uco.edu   copyright  "
},
{
  "id": "author-bio-SML",
  "level": "1",
  "url": "author-bio-SML.html",
  "type": "Author Biography",
  "number": "",
  "title": "Author Biography",
  "body": " Sean M. Laverty is writing these notes to give us all a chance at making it through the semester.  "
},
{
  "id": "dedication",
  "level": "1",
  "url": "dedication.html",
  "type": "Dedication",
  "number": "",
  "title": "Dedication",
  "body": "  To students of mathematical and life sciences everywhere but specifically at UCO.   "
},
{
  "id": "acknowledgement",
  "level": "1",
  "url": "acknowledgement.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " I would like to acknowledge the following reviewers for their helpful comments and suggestions.  XX YY, University of ZZ, AA  XX YY, University of ZZ, AA   PreTexT group.  "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " See the Table of Contents for more.  This real text has been used as the basis of a sample book for testing PreTeXt . , , , , .  Exercise sections are the heart of any mathematics text. An exercise set appears at the end of each chapter. The nature of the exercises ranges over several categories; computational, conceptual, and theoretical problems are included. A section presenting hints and solutions to many of the exercises appears at the end of the text. Often in the solutions a proof is only sketched, and it is up to the student to provide the details. The exercises range in difficulty from very easy to very challenging. Many of the more substantial problems require careful thought, so the student should not be discouraged if the solution is not forthcoming after a few minutes of work.   Sean M. Laverty  Edmond, Oklahoma 2020   "
},
{
  "id": "contributors",
  "level": "1",
  "url": "contributors.html",
  "type": "Preface",
  "number": "",
  "title": "Contributors to the 0<span class=\"process-math\">\\(^\\mathrm{th}\\)<\/span> Edition",
  "body": " Contributors to the 0 Edition  Many individuals have made this book possible. We will try to thank a few of them here, and hope we have not forgotten anybody really important.    Sean M. Laverty  Department of Mathematics and Statistics  University of Central Oklahoma  Edmond, Oklahoma, USA  slaverty@uco.edu    David Farmer  American Institute of Mathematics  farmer@aimath.org    Robert Beezer  Department of Mathematics and Computer Science  University of Puget Sound  Tacoma, Washington, USA  beezer@pugetsound.edu    "
},
{
  "id": "section-R-intro",
  "level": "1",
  "url": "section-R-intro.html",
  "type": "Section",
  "number": "1.1",
  "title": "Introduction to R programming",
  "body": " Introduction to R programming   Some words.    Calculator functions   We can use R for basic calculator functionality. 2+2 sin(2) log(10) exp(1) 5%%2 ## what might this operator '%%' do? 6%%2     Generating data  We can make vectors with the c() command and assign them to a variable with the assignment operator <- . Later we will use more advanced commands to read comma-separate files or spreadsheet output. w <- 1:10 z <- seq(0, 10, length=11) (z <- seq(0, 10, by=0.5)) # what are the major differences between these lines? length(z) # how big? rev(z) # reverse the order of elements c(w, z) # combine objects x <- c(1, 2, 3, 4) y <- 2*x plot(x,y)     Defining and using functions  We can use a function(...) to define mathematical functions or programs. For mathematical functions there are a variety of tools for evaluation. f <- function(x) sqrt(x) sapply(x, f) plot(x, sapply(x, f))     Basic programming  We can use for loops for automation. for(i in 1:5){ print(i^2) } We can use for conditionals for control. for(i in 1:5){ if(i%%2 == 1){ ## note the == for equality testing print(i^2) }else{ print(i^3) } }     Putting it all together  Suppose we wanted to run the following small program and store the results for later use. output <- NULL for(i in 1:5){ if(i%%2==1){ output <- c(output, f(i)) ## odd i }else{ output <- c(output, 2*f(i)) ## even i } } output plot(output) plot(output, type='l')     Putting it all together (and more)  Suppose we wanted to run the following small program and store the results for later use and do some work with the output. prog <- function(N){ ## function 'prog' has argument N output <- NULL ## initialize storage for(i in 1:N){ if(i%%2==1){ ## sample logic output <- c(output, f(i)) ## sample storage }else{ output <- c(output, 2*f(i)) } } return(output) ## return result } out <- prog(100) ## execute program, store result head(out) tail(out) min(out) max(out) plot(out, type='l', col=2)     Built-in functions  R has a variety of built-in commands for our current and future needs. We want to build these capabilities ourselves, but it is good to know about what is available. g <- function(x) f(x) - 4 plot(g, xlim=c(0, 20)) abline(h=0, lty=3) abline(v=0, lty=3) uniroot(g, lower=0, upper = 20) ## based on bisection root <- uniroot(g, lower=0, upper = 20)$root ?uniroot     Challenges - Arithmetic  Experiment with the commands for manipulating numerical values. Exploring the help menu might show you related commands. pi ceiling(pi) floor(pi) trunc(pi) round(pi, 5) signif(pi, 3) signif(pi - 3, 3) How do these differ if we use rather than ?    Rootfinding  Try a few steps of the bisection method by hand. Define a and b and your function . Start by storing approximations manually, p0, p1, ... , but consider how you might streamline your scratchwork by using a loop. After that you might wrap a function on the outside that accepts parameters, or you might practice using print statements to return information to the screen. This might be a good place to review the script posted to D2L. for(i in 1:5){ ##print(c(i,i^2)) ## unformatted print(paste(\"For i=\",i,\", the value i^2=\", i^2, \".\", sep='')) }  for(i in 1:5){ ##print(c(i, i^2)) ## unformatted cat(\"For i=\",i,\", the value i^2=\", i^2, \".\\n\",sep='')     RMarkdown  You can use a script and console to run and save calculations (use it like a calculator, but with better record keeping), or ultimately to write programs and script your function calls to generate output. Ultimately Markdown languages are a powerful communcation and recordkeeping tool - this document was written in RMarkdown, which allows for a combination of computation and formatted typsetting with a hybrid latex language. The downside to this is the simultaneous use and debugging of two languages.   "
},
{
  "id": "root-finding-and-fixed-point-problems",
  "level": "1",
  "url": "root-finding-and-fixed-point-problems.html",
  "type": "Section",
  "number": "2.1",
  "title": "Root-finding and fixed-point problems",
  "body": " Root-finding and fixed-point problems   Fixed-point iteration  Consider the function and the associated fixed-point problem . The result obtained by cobwebbing (graphically) is shown in the figure below, with the iterates marked in ticks on the bottom axis. Beyond things get pretty crowded near the fixed point.    A fixed-point problem.   As tabular output we have the first few steps as well. Note that are approximates to the root .    Results of a fixed-point iteration method.        0  0.5000000    1  0.7071068    2  0.6125473    3  0.6540409    4  0.6354978     Now, for a given degree of accuracy, how many iterations do we actually need? Consider The bounds are given by using the initial guess, and by using the initial guess and first iteration. We will look at a few applications of the bounds to the problem above. First notice that and , where is a bound on the magnitude of .  The worst possible initial guess would be at one of the endpoints, so we will start there (this maximizes the term , which in this case we actually want to do in order to generate a conservative bound). Taking as the desired accuracy (i.e., an accuracy within ), this gives, In the last line, the inequality has been reversed since we are dividing by a negative. With this gives which requires steps.  For the second bound, we actually need in addition to . From , we have (so ). Similarly, from , we have (so ). We will use the second of these which is larger in value. For consistency, with this gives which requires steps. We have to do at least steps to ensure we are within the bound, though we may satisfy this much more quickly. Notice that this is quite a bit more work than our bound for the Bisection method required.  Consider the root-finding problem . It has many different, but equivalent, fixed-point problems.      image   A better formulation is given by      image   Consider the root-finding problem . It has a few different, but equivalent, fixed-point problems. Unfortunately these differ with regard to theory of fixed-point iterations. In particular, keep in mind  for existence:  the trapping region for    for uniqueness:  the slope criterion     The first function, is able to capture two of the three points of interest, with nicely trapped solutions and small derivatives on those intervals. It does fail to capture the third (rightmost) root, where the slope exceeds one (see Fig.  ). Though our intervals cannot include , works well for the largest root, where the derivative is small and the appropriate trapping region can be constructed (see Fig.  ). The simplest formulation algebraically is , yet this has by far the worst characteristics with respect to the fixed-point theory for existence and uniqueness (see Fig.  ). It is difficult to constrict suitable trapping regions and there are only narrow ranges for which the derivative is appropriately bounded in magnitude.    Two functions that give rise to fixed-point problems. Dotted corresponds to the negative value of the square root and the solid line corresponds to the positive value. Left: intersections of each with the black line indicate fixed points. Right: values between and indicate that a fixed point, if it exists, is unique.     Two functions that give rise to fixed-point problems. Dotted corresponds to the negative value of the square root and the solid line corresponds to the positive value. Left: intersections of each with the black line indicate fixed points. Right: values between and indicate that a fixed point, if it exists, is unique.     Left: intersections with the black line indicate fixed points. Right: values between and indicate that a fixed point, if it exists, is unique. Notice that the smaller the value of the fixed point, the steeper the function .     Left: intersections with the black line indicate fixed points. Right: values between and indicate that a fixed point, if it exists, is unique. Notice that the smaller the value of the fixed point, the steeper the function .     Left: intersections with the black line indicate fixed points. Right: values between and indicate that a fixed point, if it exists, is unique.     Left: intersections with the black line indicate fixed points. Right: values between and indicate that a fixed point, if it exists, is unique.   Consider the fixed-point problems (below, left) and (below, right).    A trigonometric fixed-point problem.   A total of iterations of each problem are shown in the color figure above. Time is indicated in two ways: on the graph early steps are in dark blue and fade to yellow. Along the axis earlier approximations are marked by tall (also dark blue) tick marks and later iterations are marked by shorter (also yellow) tick marks. The scaling of the above-axis tick marks is nothing quantitative or necessarily related to the values of the approximation itself, it is just meant to show the progression of the iterations.  For two problems starting from , we see the iterations approaching the fixed point visible on each panel of the graph. Solutions to the first fixed-point problem (left) converge very slowly, while those to the second (right) converge very quickly. Details of the approaches to the fixed points are interesting as well. Approximations converging to the true solution of for the first problem decrease monotonically, while those converging to the true solution of the second problem oscillate.   Challenge  For each of the above, state an associated rootfinding problem, an interval on which you could apply the bisection method, and the number of iterations it would take to approximate the root to an accuracy of with bisection.    "
},
{
  "id": "fig-basic-fp",
  "level": "2",
  "url": "root-finding-and-fixed-point-problems.html#fig-basic-fp",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": "  A fixed-point problem.  "
},
{
  "id": "tab-fp-result",
  "level": "2",
  "url": "root-finding-and-fixed-point-problems.html#tab-fp-result",
  "type": "Table",
  "number": "2.1.2",
  "title": "Results of a fixed-point iteration method.",
  "body": " Results of a fixed-point iteration method.        0  0.5000000    1  0.7071068    2  0.6125473    3  0.6540409    4  0.6354978    "
},
{
  "id": "fig-fp-bad",
  "level": "2",
  "url": "root-finding-and-fixed-point-problems.html#fig-fp-bad",
  "type": "Figure",
  "number": "2.1.3",
  "title": "",
  "body": "  image  "
},
{
  "id": "fig-fp-good",
  "level": "2",
  "url": "root-finding-and-fixed-point-problems.html#fig-fp-good",
  "type": "Figure",
  "number": "2.1.4",
  "title": "",
  "body": "  image  "
},
{
  "id": "tab-fp-theorem",
  "level": "2",
  "url": "root-finding-and-fixed-point-problems.html#tab-fp-theorem",
  "type": "Table",
  "number": "2.1.5",
  "title": "",
  "body": " for existence:  the trapping region for    for uniqueness:  the slope criterion   "
},
{
  "id": "fig-fp-g1",
  "level": "2",
  "url": "root-finding-and-fixed-point-problems.html#fig-fp-g1",
  "type": "Figure",
  "number": "2.1.6",
  "title": "",
  "body": "  Two functions that give rise to fixed-point problems. Dotted corresponds to the negative value of the square root and the solid line corresponds to the positive value. Left: intersections of each with the black line indicate fixed points. Right: values between and indicate that a fixed point, if it exists, is unique.  "
},
{
  "id": "fig-fp-g1p",
  "level": "2",
  "url": "root-finding-and-fixed-point-problems.html#fig-fp-g1p",
  "type": "Figure",
  "number": "2.1.7",
  "title": "",
  "body": "  Two functions that give rise to fixed-point problems. Dotted corresponds to the negative value of the square root and the solid line corresponds to the positive value. Left: intersections of each with the black line indicate fixed points. Right: values between and indicate that a fixed point, if it exists, is unique.  "
},
{
  "id": "fig-fp-g2",
  "level": "2",
  "url": "root-finding-and-fixed-point-problems.html#fig-fp-g2",
  "type": "Figure",
  "number": "2.1.8",
  "title": "",
  "body": "  Left: intersections with the black line indicate fixed points. Right: values between and indicate that a fixed point, if it exists, is unique. Notice that the smaller the value of the fixed point, the steeper the function .  "
},
{
  "id": "fig-fp-g2a",
  "level": "2",
  "url": "root-finding-and-fixed-point-problems.html#fig-fp-g2a",
  "type": "Figure",
  "number": "2.1.9",
  "title": "",
  "body": "  Left: intersections with the black line indicate fixed points. Right: values between and indicate that a fixed point, if it exists, is unique. Notice that the smaller the value of the fixed point, the steeper the function .  "
},
{
  "id": "fig-fp-g3",
  "level": "2",
  "url": "root-finding-and-fixed-point-problems.html#fig-fp-g3",
  "type": "Figure",
  "number": "2.1.10",
  "title": "",
  "body": "  Left: intersections with the black line indicate fixed points. Right: values between and indicate that a fixed point, if it exists, is unique.  "
},
{
  "id": "fig-fp-g3p",
  "level": "2",
  "url": "root-finding-and-fixed-point-problems.html#fig-fp-g3p",
  "type": "Figure",
  "number": "2.1.11",
  "title": "",
  "body": "  Left: intersections with the black line indicate fixed points. Right: values between and indicate that a fixed point, if it exists, is unique.  "
},
{
  "id": "fig-fp-trig",
  "level": "2",
  "url": "root-finding-and-fixed-point-problems.html#fig-fp-trig",
  "type": "Figure",
  "number": "2.1.12",
  "title": "",
  "body": "  A trigonometric fixed-point problem.  "
},
{
  "id": "introduction",
  "level": "1",
  "url": "introduction.html",
  "type": "Section",
  "number": "2.2",
  "title": "Introduction",
  "body": " Introduction   Polynomial form and evaluation speed  To explore the relationship between computational time and polynomial form, consider three forms of the same polynomial We can evaluate each function at 1000 randomly generated points (to be used for all functions and all replicates) and, using an R package called microbenchmark, repeat this experiment 1000 times for each form. Results of this experiment are given in Figure  .    Median computing times (measured execution time in microseconds) are 607.1064 for  , 511.8887 for  , and 516.9337 for  .   With respect to class, you might ask yourself why we have emphasized nesting, but not factoring, when it comes to working with polynomials.   "
},
{
  "id": "fig-poly-eval",
  "level": "2",
  "url": "introduction.html#fig-poly-eval",
  "type": "Figure",
  "number": "2.2.1",
  "title": "",
  "body": "  Median computing times (measured execution time in microseconds) are 607.1064 for  , 511.8887 for  , and 516.9337 for  .  "
},
{
  "id": "lagrange-interpolation",
  "level": "1",
  "url": "lagrange-interpolation.html",
  "type": "Section",
  "number": "3.1",
  "title": "Lagrange interpolation",
  "body": " Lagrange interpolation  Below are for equally spaced points on .    image   Considering the function we show the approximation (along with the function) on the left and the error on the right.    image   "
},
{
  "id": "fig-lagrange-li",
  "level": "2",
  "url": "lagrange-interpolation.html#fig-lagrange-li",
  "type": "Figure",
  "number": "3.1.1",
  "title": "",
  "body": "  image  "
},
{
  "id": "fig-lagrange-fP",
  "level": "2",
  "url": "lagrange-interpolation.html#fig-lagrange-fP",
  "type": "Figure",
  "number": "3.1.2",
  "title": "",
  "body": "  image  "
},
{
  "id": "cubic-spline-interpolation",
  "level": "1",
  "url": "cubic-spline-interpolation.html",
  "type": "Section",
  "number": "3.2",
  "title": "Cubic spline interpolation",
  "body": " Cubic spline interpolation  Before you begin, please note that there is a typo in the clamped spline example in the book (Example 2, page 148, eighth edition), the correct solution will be given below.  When computing a cubic spline with grid points, keep in mind that we have intervals, spline segments, and an matrix. For example, if the data is known at the grid points we have points, intervals, spline segments, and a matrix. The spacings between grid points, defined , are used below.  General approach We can verify the conditions of the spline by definition, but ultimately the way to implement this, even for small datasets, is to use matrix algebra. Let’s use the vector (as in , rather than ) for the right-hand side to avoid likely confusion between entries of the right-hand side vector and the coefficients of the splines. The first and last rows of and depend on the choice of boundary conditions, but the interior rows are illustrated below. On the interior rows of the main diagonal, has entries On the interior rows of the sub-diagonal (below main), has entries On the interior rows of the super-diagonal (above main), has entries       Natural BCs: The interior rows of are as described above, but the first row begins with and the last row ends with . To satisfy the boundary condition, the first and last rows of of are exactly .    Clamped BCs: The interior rows of are as described above, but the first row begins with and the last row ends with . To satisfy the boundary condition, the first and last rows of of are exactly and , respectively.      Parameterizing the spline: Once the ’s have been solved, the ’s and ’s can be specified in reverse order from (see Alg. 3.4 (Step 6) or Alg. 3.5 (Step 7)). Notice that (from ) is used in the calculation of , but is never actually used in a spline. Regardless of the boundary condition, the calculated coefficients will appear in the spline of the form Note that and .   Example A natural spline: See Example 1 on page 143. Consider the data and .    Coefficients of a natural cubic spline.           0  1.000000  1.465998  0.0000000  0.2522842    1  2.718282  2.222850  0.7568526  1.6910714    2  7.389056  8.809770  5.8300668  -1.9433556       A clamped spline: See Example 2 on page 148.     Coefficients of a clamped cubic spline.           0  1.000000  1.000000  0.4446825  0.2735993    1  2.718282  2.710163  1.2654805  0.6951308    2  7.389056  7.326516  3.3508729  2.0190916       image   "
},
{
  "id": "tab-nat-cubic",
  "level": "2",
  "url": "cubic-spline-interpolation.html#tab-nat-cubic",
  "type": "Table",
  "number": "3.2.1",
  "title": "Coefficients of a natural cubic spline.",
  "body": " Coefficients of a natural cubic spline.           0  1.000000  1.465998  0.0000000  0.2522842    1  2.718282  2.222850  0.7568526  1.6910714    2  7.389056  8.809770  5.8300668  -1.9433556    "
},
{
  "id": "fig-cubic-natural",
  "level": "2",
  "url": "cubic-spline-interpolation.html#fig-cubic-natural",
  "type": "Figure",
  "number": "3.2.2",
  "title": "",
  "body": "  A clamped spline: See Example 2 on page 148.  "
},
{
  "id": "tab-clamped-cubic",
  "level": "2",
  "url": "cubic-spline-interpolation.html#tab-clamped-cubic",
  "type": "Table",
  "number": "3.2.3",
  "title": "Coefficients of a clamped cubic spline.",
  "body": " Coefficients of a clamped cubic spline.           0  1.000000  1.000000  0.4446825  0.2735993    1  2.718282  2.710163  1.2654805  0.6951308    2  7.389056  7.326516  3.3508729  2.0190916    "
},
{
  "id": "fig-cubic-clamped",
  "level": "2",
  "url": "cubic-spline-interpolation.html#fig-cubic-clamped",
  "type": "Figure",
  "number": "3.2.4",
  "title": "",
  "body": "  image  "
},
{
  "id": "discrete-least-squares-approximation",
  "level": "1",
  "url": "discrete-least-squares-approximation.html",
  "type": "Section",
  "number": "4.1",
  "title": "Discrete least squares approximation",
  "body": " Discrete least squares approximation  Given the data in the vehicle speed problems (see sections 3.3, 3.4 homework), we can plot a few functions representing the position data (see Figure ). The Hermite (black) and spline (red) interpolations exactly pass through the position data points. On the other hand, the linear approximation (blue) does not exactly pass through a single of these points.    Data and interpolating and approximating polynomials.     Speed data and predicted speed by interpolating and approximating polynomials ( left: feet per second and right: miles per hour).     Speed data and predicted speed by interpolating and approximating polynomials ( left: feet per second and right: miles per hour).   There are a variety of factors to weigh when choosing a method for representing data by a function.  "
},
{
  "id": "fig-speed1",
  "level": "2",
  "url": "discrete-least-squares-approximation.html#fig-speed1",
  "type": "Figure",
  "number": "4.1.1",
  "title": "",
  "body": "  Data and interpolating and approximating polynomials.  "
},
{
  "id": "fig-speed2",
  "level": "2",
  "url": "discrete-least-squares-approximation.html#fig-speed2",
  "type": "Figure",
  "number": "4.1.2",
  "title": "",
  "body": "  Speed data and predicted speed by interpolating and approximating polynomials ( left: feet per second and right: miles per hour).  "
},
{
  "id": "fig-speed3",
  "level": "2",
  "url": "discrete-least-squares-approximation.html#fig-speed3",
  "type": "Figure",
  "number": "4.1.3",
  "title": "",
  "body": "  Speed data and predicted speed by interpolating and approximating polynomials ( left: feet per second and right: miles per hour).  "
},
{
  "id": "continuous-case-8_2-pg495",
  "level": "1",
  "url": "continuous-case-8_2-pg495.html",
  "type": "Section",
  "number": "4.2",
  "title": "Continuous case (i.e., 8.2, pg. 495)",
  "body": " Continuous case (i.e., 8.2, pg. 495)  Consider the last term in the definition of the error for least squares polynomial approximation. We have, Our goal is the partial derivative of this term with respect to . Notice the following, where key steps are moving differentiation under the integral, applying the product rule, and rearranging the sum,   "
},
{
  "id": "numerical-calculus",
  "level": "1",
  "url": "numerical-calculus.html",
  "type": "Section",
  "number": "5.1",
  "title": "Numerical calculus",
  "body": " Numerical calculus   Numerical differentiation  Consider the function at a point and approximations to its derivative . Approximations can be made by to somewhat straightforward approximations: the first-order forward difference and the second-order forward and centered differences. The error in these approximations is illustrated below, with rounding to simulate calculations by single-precision and double-precision numbers.    Points indicate calculated for first-order forward (black), second-order forward (red), and centered (gray) difference approximations. Line illustrates predicted reduction in error as step size shrinks. Left: 8 digit calculation (simulated single-precision), Right: 16 digit calculation (simulated double-precision)     Points indicate calculated for first-order forward (black), second-order forward (red), and centered (gray) difference approximations. Line illustrates predicted reduction in error as step size shrinks. Left: 8 digit calculation (simulated single-precision), Right: 16 digit calculation (simulated double-precision)     As in Figure  , but with smaller step sizes included. Note that error increases due to roundoff for both methods, but especially for the centered method as the step size is reduced below .     As in Figure  , but with smaller step sizes included. Note that error increases due to roundoff for both methods, but especially for the centered method as the step size is reduced below .    "
},
{
  "id": "fig-diff-step8",
  "level": "2",
  "url": "numerical-calculus.html#fig-diff-step8",
  "type": "Figure",
  "number": "5.1.1",
  "title": "",
  "body": "  Points indicate calculated for first-order forward (black), second-order forward (red), and centered (gray) difference approximations. Line illustrates predicted reduction in error as step size shrinks. Left: 8 digit calculation (simulated single-precision), Right: 16 digit calculation (simulated double-precision)  "
},
{
  "id": "fig-diff-step16",
  "level": "2",
  "url": "numerical-calculus.html#fig-diff-step16",
  "type": "Figure",
  "number": "5.1.2",
  "title": "",
  "body": "  Points indicate calculated for first-order forward (black), second-order forward (red), and centered (gray) difference approximations. Line illustrates predicted reduction in error as step size shrinks. Left: 8 digit calculation (simulated single-precision), Right: 16 digit calculation (simulated double-precision)  "
},
{
  "id": "fig-diff-round8",
  "level": "2",
  "url": "numerical-calculus.html#fig-diff-round8",
  "type": "Figure",
  "number": "5.1.3",
  "title": "",
  "body": "  As in Figure  , but with smaller step sizes included. Note that error increases due to roundoff for both methods, but especially for the centered method as the step size is reduced below .  "
},
{
  "id": "fig-diff-round16",
  "level": "2",
  "url": "numerical-calculus.html#fig-diff-round16",
  "type": "Figure",
  "number": "5.1.4",
  "title": "",
  "body": "  As in Figure  , but with smaller step sizes included. Note that error increases due to roundoff for both methods, but especially for the centered method as the step size is reduced below .  "
},
{
  "id": "numerical-integration-monte-carlo",
  "level": "1",
  "url": "numerical-integration-monte-carlo.html",
  "type": "Section",
  "number": "5.2",
  "title": "Numerical integration (Monte Carlo)",
  "body": " Numerical integration (Monte Carlo)   This section may be imperfect, but reflects the main idea.   Though not emphasized here, the techniques that follow are most useful in higher dimensional integrals. We can integrate using the Fundamental Theorem of Calculus, From the Mean Value Theorem for Integrals we have that The shaded region on the left panel (Fig  ) shows the area under the curve. The area on the right is the same size, but bounded by a constant function whose value is .    Left: Traditional calculus interpretation of the area under the curve. Right: Average value of a function defined by equal area.   One scheme of Monte Carlo integration uses function values at randomly chosen points to calculate areas which are then averaged. Here Fig  (left panel) shows 5 of the 100 random rectangle regions. The shaded area on the right panel corresponds to the region whose height is the average of the random function values. Notice that this height very closely compares with the average value of the function, thus the areas of the regions are similar.    Dashed line indicates from traditional calculus. Left: 5 sample rectangles (shaded). Right: Average area and function height by random sampling.   An alternate scheme (Fig  , left) plots points in the plane and considers the fraction of points that fall below the curve (i.e., ‘the acceptance region‘). This fraction is multiplied by the total area of the region (easier to calculate since the shape is likely square). Though this is easier to program than the notation might suggest, consider the indicator function  and take      Left: Accepted points fall below the graph of the function. Right: Comparison of rectangle method and rejection method for ten different trials of each.     Left: Accepted points fall below the graph of the function. Right: Comparison of rectangle method and rejection method for ten different trials of each.   "
},
{
  "id": "fig-integration",
  "level": "2",
  "url": "numerical-integration-monte-carlo.html#fig-integration",
  "type": "Figure",
  "number": "5.2.1",
  "title": "",
  "body": "  Left: Traditional calculus interpretation of the area under the curve. Right: Average value of a function defined by equal area.  "
},
{
  "id": "fig-integration-rect",
  "level": "2",
  "url": "numerical-integration-monte-carlo.html#fig-integration-rect",
  "type": "Figure",
  "number": "5.2.2",
  "title": "",
  "body": "  Dashed line indicates from traditional calculus. Left: 5 sample rectangles (shaded). Right: Average area and function height by random sampling.  "
},
{
  "id": "fig-integration-mc1",
  "level": "2",
  "url": "numerical-integration-monte-carlo.html#fig-integration-mc1",
  "type": "Figure",
  "number": "5.2.3",
  "title": "",
  "body": "  Left: Accepted points fall below the graph of the function. Right: Comparison of rectangle method and rejection method for ten different trials of each.  "
},
{
  "id": "fig-integration-mc2",
  "level": "2",
  "url": "numerical-integration-monte-carlo.html#fig-integration-mc2",
  "type": "Figure",
  "number": "5.2.4",
  "title": "",
  "body": "  Left: Accepted points fall below the graph of the function. Right: Comparison of rectangle method and rejection method for ten different trials of each.  "
},
{
  "id": "appendix-def",
  "level": "1",
  "url": "appendix-def.html",
  "type": "Appendix",
  "number": "A",
  "title": "Definitions",
  "body": " Definitions   "
},
{
  "id": "appendix-thm",
  "level": "1",
  "url": "appendix-thm.html",
  "type": "Appendix",
  "number": "B",
  "title": "Theorems",
  "body": " Theorems   "
},
{
  "id": "appendix-ex",
  "level": "1",
  "url": "appendix-ex.html",
  "type": "Appendix",
  "number": "C",
  "title": "Examples",
  "body": " Examples   "
},
{
  "id": "appendix-gfdl",
  "level": "1",
  "url": "appendix-gfdl.html",
  "type": "Appendix",
  "number": "D",
  "title": "GNU Free Documentation License",
  "body": " GNU Free Documentation License  Version 1.3, 3 November 2008  Copyright copyright 2000, 2001, 2002, 2007, 2008 Free Software Foundation, Inc. < >  Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.   0. PREAMBLE  The purpose of this License is to make a manual, textbook, or other functional and useful document free in the sense of freedom: to assure everyone the effective freedom to copy and redistribute it, with or without modifying it, either commercially or noncommercially. Secondarily, this License preserves for the author and publisher a way to get credit for their work, while not being considered responsible for modifications made by others.  This License is a kind of copyleft , which means that derivative works of the document must themselves be free in the same sense. It complements the GNU General Public License, which is a copyleft license designed for free software.  We have designed this License in order to use it for manuals for free software, because free software needs free documentation: a free program should come with manuals providing the same freedoms that the software does. But this License is not limited to software manuals; it can be used for any textual work, regardless of subject matter or whether it is published as a printed book. We recommend this License principally for works whose purpose is instruction or reference.    1. APPLICABILITY AND DEFINITIONS  This License applies to any manual or other work, in any medium, that contains a notice placed by the copyright holder saying it can be distributed under the terms of this License. Such a notice grants a world-wide, royalty-free license, unlimited in duration, to use that work under the conditions stated herein. The Document , below, refers to any such manual or work. Any member of the public is a licensee, and is addressed as you . You accept the license if you copy, modify or distribute the work in a way requiring permission under copyright law.  A Modified Version of the Document means any work containing the Document or a portion of it, either copied verbatim, or with modifications and\/or translated into another language.  A Secondary Section is a named appendix or a front-matter section of the Document that deals exclusively with the relationship of the publishers or authors of the Document to the Document's overall subject (or to related matters) and contains nothing that could fall directly within that overall subject. (Thus, if the Document is in part a textbook of mathematics, a Secondary Section may not explain any mathematics.) The relationship could be a matter of historical connection with the subject or with related matters, or of legal, commercial, philosophical, ethical or political position regarding them.  The Invariant Sections are certain Secondary Sections whose titles are designated, as being those of Invariant Sections, in the notice that says that the Document is released under this License. If a section does not fit the above definition of Secondary then it is not allowed to be designated as Invariant. The Document may contain zero Invariant Sections. If the Document does not identify any Invariant Sections then there are none.  The Cover Texts are certain short passages of text that are listed, as Front-Cover Texts or Back-Cover Texts, in the notice that says that the Document is released under this License. A Front-Cover Text may be at most 5 words, and a Back-Cover Text may be at most 25 words.  A Transparent copy of the Document means a machine-readable copy, represented in a format whose specification is available to the general public, that is suitable for revising the document straightforwardly with generic text editors or (for images composed of pixels) generic paint programs or (for drawings) some widely available drawing editor, and that is suitable for input to text formatters or for automatic translation to a variety of formats suitable for input to text formatters. A copy made in an otherwise Transparent file format whose markup, or absence of markup, has been arranged to thwart or discourage subsequent modification by readers is not Transparent. An image format is not Transparent if used for any substantial amount of text. A copy that is not Transparent is called Opaque .  Examples of suitable formats for Transparent copies include plain ASCII without markup, Texinfo input format, LaTeX input format, SGML or XML using a publicly available DTD, and standard-conforming simple HTML, PostScript or PDF designed for human modification. Examples of transparent image formats include PNG, XCF and JPG. Opaque formats include proprietary formats that can be read and edited only by proprietary word processors, SGML or XML for which the DTD and\/or processing tools are not generally available, and the machine-generated HTML, PostScript or PDF produced by some word processors for output purposes only.  The Title Page means, for a printed book, the title page itself, plus such following pages as are needed to hold, legibly, the material this License requires to appear in the title page. For works in formats which do not have any title page as such, Title Page means the text near the most prominent appearance of the work's title, preceding the beginning of the body of the text.  The publisher means any person or entity that distributes copies of the Document to the public.  A section Entitled XYZ means a named subunit of the Document whose title either is precisely XYZ or contains XYZ in parentheses following text that translates XYZ in another language. (Here XYZ stands for a specific section name mentioned below, such as Acknowledgements , Dedications , Endorsements , or History .) To Preserve the Title of such a section when you modify the Document means that it remains a section Entitled XYZ according to this definition.  The Document may include Warranty Disclaimers next to the notice which states that this License applies to the Document. These Warranty Disclaimers are considered to be included by reference in this License, but only as regards disclaiming warranties: any other implication that these Warranty Disclaimers may have is void and has no effect on the meaning of this License.    2. VERBATIM COPYING  You may copy and distribute the Document in any medium, either commercially or noncommercially, provided that this License, the copyright notices, and the license notice saying this License applies to the Document are reproduced in all copies, and that you add no other conditions whatsoever to those of this License. You may not use technical measures to obstruct or control the reading or further copying of the copies you make or distribute. However, you may accept compensation in exchange for copies. If you distribute a large enough number of copies you must also follow the conditions in section 3.  You may also lend copies, under the same conditions stated above, and you may publicly display copies.    3. COPYING IN QUANTITY  If you publish printed copies (or copies in media that commonly have printed covers) of the Document, numbering more than 100, and the Document's license notice requires Cover Texts, you must enclose the copies in covers that carry, clearly and legibly, all these Cover Texts: Front-Cover Texts on the front cover, and Back-Cover Texts on the back cover. Both covers must also clearly and legibly identify you as the publisher of these copies. The front cover must present the full title with all words of the title equally prominent and visible. You may add other material on the covers in addition. Copying with changes limited to the covers, as long as they preserve the title of the Document and satisfy these conditions, can be treated as verbatim copying in other respects.  If the required texts for either cover are too voluminous to fit legibly, you should put the first ones listed (as many as fit reasonably) on the actual cover, and continue the rest onto adjacent pages.  If you publish or distribute Opaque copies of the Document numbering more than 100, you must either include a machine-readable Transparent copy along with each Opaque copy, or state in or with each Opaque copy a computer-network location from which the general network-using public has access to download using public-standard network protocols a complete Transparent copy of the Document, free of added material. If you use the latter option, you must take reasonably prudent steps, when you begin distribution of Opaque copies in quantity, to ensure that this Transparent copy will remain thus accessible at the stated location until at least one year after the last time you distribute an Opaque copy (directly or through your agents or retailers) of that edition to the public.  It is requested, but not required, that you contact the authors of the Document well before redistributing any large number of copies, to give them a chance to provide you with an updated version of the Document.    4. MODIFICATIONS  You may copy and distribute a Modified Version of the Document under the conditions of sections 2 and 3 above, provided that you release the Modified Version under precisely this License, with the Modified Version filling the role of the Document, thus licensing distribution and modification of the Modified Version to whoever possesses a copy of it. In addition, you must do these things in the Modified Version:  Use in the Title Page (and on the covers, if any) a title distinct from that of the Document, and from those of previous versions (which should, if there were any, be listed in the History section of the Document). You may use the same title as a previous version if the original publisher of that version gives permission.  List on the Title Page, as authors, one or more persons or entities responsible for authorship of the modifications in the Modified Version, together with at least five of the principal authors of the Document (all of its principal authors, if it has fewer than five), unless they release you from this requirement.  State on the Title page the name of the publisher of the Modified Version, as the publisher.  Preserve all the copyright notices of the Document.  Add an appropriate copyright notice for your modifications adjacent to the other copyright notices.  Include, immediately after the copyright notices, a license notice giving the public permission to use the Modified Version under the terms of this License, in the form shown in the Addendum below.  Preserve in that license notice the full lists of Invariant Sections and required Cover Texts given in the Document's license notice.  Include an unaltered copy of this License.  Preserve the section Entitled History , Preserve its Title, and add to it an item stating at least the title, year, new authors, and publisher of the Modified Version as given on the Title Page. If there is no section Entitled History in the Document, create one stating the title, year, authors, and publisher of the Document as given on its Title Page, then add an item describing the Modified Version as stated in the previous sentence.  Preserve the network location, if any, given in the Document for public access to a Transparent copy of the Document, and likewise the network locations given in the Document for previous versions it was based on. These may be placed in the History section. You may omit a network location for a work that was published at least four years before the Document itself, or if the original publisher of the version it refers to gives permission.  For any section Entitled Acknowledgements or Dedications , Preserve the Title of the section, and preserve in the section all the substance and tone of each of the contributor acknowledgements and\/or dedications given therein.  Preserve all the Invariant Sections of the Document, unaltered in their text and in their titles. Section numbers or the equivalent are not considered part of the section titles.  Delete any section Entitled Endorsements . Such a section may not be included in the Modified Version.  Do not retitle any existing section to be Entitled Endorsements or to conflict in title with any Invariant Section.  Preserve any Warranty Disclaimers.   If the Modified Version includes new front-matter sections or appendices that qualify as Secondary Sections and contain no material copied from the Document, you may at your option designate some or all of these sections as invariant. To do this, add their titles to the list of Invariant Sections in the Modified Version's license notice. These titles must be distinct from any other section titles.  You may add a section Entitled Endorsements , provided it contains nothing but endorsements of your Modified Version by various parties for example, statements of peer review or that the text has been approved by an organization as the authoritative definition of a standard.  You may add a passage of up to five words as a Front-Cover Text, and a passage of up to 25 words as a Back-Cover Text, to the end of the list of Cover Texts in the Modified Version. Only one passage of Front-Cover Text and one of Back-Cover Text may be added by (or through arrangements made by) any one entity. If the Document already includes a cover text for the same cover, previously added by you or by arrangement made by the same entity you are acting on behalf of, you may not add another; but you may replace the old one, on explicit permission from the previous publisher that added the old one.  The author(s) and publisher(s) of the Document do not by this License give permission to use their names for publicity for or to assert or imply endorsement of any Modified Version.    5. COMBINING DOCUMENTS  You may combine the Document with other documents released under this License, under the terms defined in section 4 above for modified versions, provided that you include in the combination all of the Invariant Sections of all of the original documents, unmodified, and list them all as Invariant Sections of your combined work in its license notice, and that you preserve all their Warranty Disclaimers.  The combined work need only contain one copy of this License, and multiple identical Invariant Sections may be replaced with a single copy. If there are multiple Invariant Sections with the same name but different contents, make the title of each such section unique by adding at the end of it, in parentheses, the name of the original author or publisher of that section if known, or else a unique number. Make the same adjustment to the section titles in the list of Invariant Sections in the license notice of the combined work.  In the combination, you must combine any sections Entitled History in the various original documents, forming one section Entitled History ; likewise combine any sections Entitled Acknowledgements , and any sections Entitled Dedications . You must delete all sections Entitled Endorsements .    6. COLLECTIONS OF DOCUMENTS  You may make a collection consisting of the Document and other documents released under this License, and replace the individual copies of this License in the various documents with a single copy that is included in the collection, provided that you follow the rules of this License for verbatim copying of each of the documents in all other respects.  You may extract a single document from such a collection, and distribute it individually under this License, provided you insert a copy of this License into the extracted document, and follow this License in all other respects regarding verbatim copying of that document.    7. AGGREGATION WITH INDEPENDENT WORKS  A compilation of the Document or its derivatives with other separate and independent documents or works, in or on a volume of a storage or distribution medium, is called an aggregate if the copyright resulting from the compilation is not used to limit the legal rights of the compilation's users beyond what the individual works permit. When the Document is included in an aggregate, this License does not apply to the other works in the aggregate which are not themselves derivative works of the Document.  If the Cover Text requirement of section 3 is applicable to these copies of the Document, then if the Document is less than one half of the entire aggregate, the Document's Cover Texts may be placed on covers that bracket the Document within the aggregate, or the electronic equivalent of covers if the Document is in electronic form. Otherwise they must appear on printed covers that bracket the whole aggregate.    8. TRANSLATION  Translation is considered a kind of modification, so you may distribute translations of the Document under the terms of section 4. Replacing Invariant Sections with translations requires special permission from their copyright holders, but you may include translations of some or all Invariant Sections in addition to the original versions of these Invariant Sections. You may include a translation of this License, and all the license notices in the Document, and any Warranty Disclaimers, provided that you also include the original English version of this License and the original versions of those notices and disclaimers. In case of a disagreement between the translation and the original version of this License or a notice or disclaimer, the original version will prevail.  If a section in the Document is Entitled Acknowledgements , Dedications , or History , the requirement (section 4) to Preserve its Title (section 1) will typically require changing the actual title.    9. TERMINATION  You may not copy, modify, sublicense, or distribute the Document except as expressly provided under this License. Any attempt otherwise to copy, modify, sublicense, or distribute it is void, and will automatically terminate your rights under this License.  However, if you cease all violation of this License, then your license from a particular copyright holder is reinstated (a) provisionally, unless and until the copyright holder explicitly and finally terminates your license, and (b) permanently, if the copyright holder fails to notify you of the violation by some reasonable means prior to 60 days after the cessation.  Moreover, your license from a particular copyright holder is reinstated permanently if the copyright holder notifies you of the violation by some reasonable means, this is the first time you have received notice of violation of this License (for any work) from that copyright holder, and you cure the violation prior to 30 days after your receipt of the notice.  Termination of your rights under this section does not terminate the licenses of parties who have received copies or rights from you under this License. If your rights have been terminated and not permanently reinstated, receipt of a copy of some or all of the same material does not give you any rights to use it.    10. FUTURE REVISIONS OF THIS LICENSE  The Free Software Foundation may publish new, revised versions of the GNU Free Documentation License from time to time. Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns. See .  Each version of the License is given a distinguishing version number. If the Document specifies that a particular numbered version of this License or any later version applies to it, you have the option of following the terms and conditions either of that specified version or of any later version that has been published (not as a draft) by the Free Software Foundation. If the Document does not specify a version number of this License, you may choose any version ever published (not as a draft) by the Free Software Foundation. If the Document specifies that a proxy can decide which future versions of this License can be used, that proxy's public statement of acceptance of a version permanently authorizes you to choose that version for the Document.    11. RELICENSING  Massive Multiauthor Collaboration Site (or MMC Site ) means any World Wide Web server that publishes copyrightable works and also provides prominent facilities for anybody to edit those works. A public wiki that anybody can edit is an example of such a server. A Massive Multiauthor Collaboration (or MMC ) contained in the site means any set of copyrightable works thus published on the MMC site.  CC-BY-SA means the Creative Commons Attribution-Share Alike 3.0 license published by Creative Commons Corporation, a not-for-profit corporation with a principal place of business in San Francisco, California, as well as future copyleft versions of that license published by that same organization.  Incorporate means to publish or republish a Document, in whole or in part, as part of another Document.  An MMC is eligible for relicensing if it is licensed under this License, and if all works that were first published under this License somewhere other than this MMC, and subsequently incorporated in whole or in part into the MMC, (1) had no cover texts or invariant sections, and (2) were thus incorporated prior to November 1, 2008.  The operator of an MMC Site may republish an MMC contained in the site under CC-BY-SA on the same site at any time before August 1, 2009, provided the MMC is eligible for relicensing.    ADDENDUM: How to use this License for your documents  To use this License in a document you have written, include a copy of the License in the document and put the following copyright and license notices just after the title page:  Copyright (C) YEAR YOUR NAME. Permission is granted to copy, distribute and\/or modify this document under the terms of the GNU Free Documentation License, Version 1.3 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts. A copy of the license is included in the section entitled \"GNU Free Documentation License\".  If you have Invariant Sections, Front-Cover Texts and Back-Cover Texts, replace the with Texts. line with this:  with the Invariant Sections being LIST THEIR TITLES, with the Front-Cover Texts being LIST, and with the Back-Cover Texts being LIST.  If you have Invariant Sections without Cover Texts, or some other combination of the three, merge those two alternatives to suit the situation.  If your document contains nontrivial examples of program code, we recommend releasing these examples in parallel under your choice of free software license, such as the GNU General Public License, to permit their use in free software.   "
},
{
  "id": "index-1",
  "level": "1",
  "url": "index-1.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": "  "
},
{
  "id": "back-colophon",
  "level": "1",
  "url": "back-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in MathBook XML.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
