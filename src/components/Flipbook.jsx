import React, { useState } from "react";
import Section from "./Section";
import { BottomLine } from "./design/Hero";



// images imports
import janFebCover from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb(cover).jpg";
import janFebPage1 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0001.jpg";
import janFebPage2 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0002.jpg";
import janFebPage3 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0003.jpg";
import janFebPage4 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0004.jpg";
import janFebPage5 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0005.jpg";
import janFebPage6 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0006.jpg";
import janFebPage7 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0007.jpg";
import janFebPage8 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0008.jpg";
import janFebPage9 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0009.jpg";
import janFebPage10 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0010.jpg";
import janFebPage11 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0011.jpg";
import janFebPage12 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0012.jpg";
import janFebPage13 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0013.jpg";
import janFebPage14 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0014.jpg";
import janFebPage15 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0015.jpg";
import janFebPage16 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0016.jpg";
import janFebPage17 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0017.jpg";
import janFebPage18 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0018.jpg";
import janFebPage19 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0019.jpg";
import janFebPage20 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0020.jpg";
import janFebPage21 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0021.jpg";
import janFebPage22 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0022.jpg";
import janFebPage23 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0023.jpg";
import janFebPage24 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0024.jpg";
import janFebPage25 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0025.jpg";
import janFebPage26 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0026.jpg";
import janFebPage27 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0027.jpg";
import janFebPage28 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0028.jpg";
import janFebPage29 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0029.jpg";
import janFebPage30 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0030.jpg";
import janFebPage31 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0031.jpg";
import janFebPage32 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0032.jpg";
import janFebPage33 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0033.jpg";
import janFebPage34 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0034.jpg";
import janFebPage35 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0035.jpg";
import janFebPage36 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0036.jpg";
import janFebPage37 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0037.jpg";
import janFebPage38 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0038.jpg";
import janFebPage39 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0039.jpg";
import janFebPage40 from "../acm-assets-2/magazine-2025/jan-feb-2025/Volume 6-Issue_1_jan-feb_pdf_page-0040.jpg";


import marAprCover from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr(cover).jpg";
import marAprPage1 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0001.jpg";
import marAprPage2 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0002.jpg";
import marAprPage3 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0003.jpg";
import marAprPage4 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0004.jpg";
import marAprPage5 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0005.jpg";
import marAprPage6 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0006.jpg";
import marAprPage7 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0007.jpg";
import marAprPage8 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0008.jpg";
import marAprPage9 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0009.jpg";
import marAprPage10 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0010.jpg";
import marAprPage11 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0011.jpg";
import marAprPage12 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0012.jpg";
import marAprPage13 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0013.jpg";
import marAprPage14 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0014.jpg";
import marAprPage15 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0015.jpg";
import marAprPage16 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0016.jpg";
import marAprPage17 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0017.jpg";
import marAprPage18 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0018.jpg";
import marAprPage19 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0019.jpg";
import marAprPage20 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0020.jpg";
import marAprPage21 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0021.jpg";
import marAprPage22 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0022.jpg";
import marAprPage23 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0023.jpg";
import marAprPage24 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0024.jpg";
import marAprPage25 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0025.jpg";
import marAprPage26 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0026.jpg";
import marAprPage27 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0027.jpg";
import marAprPage28 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0028.jpg";
import marAprPage29 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0029.jpg";
import marAprPage30 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0030.jpg";
import marAprPage31 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0031.jpg";
import marAprPage32 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0032.jpg";
import marAprPage33 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0033.jpg";
import marAprPage34 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0034.jpg";
import marAprPage35 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0035.jpg";
import marAprPage36 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0036.jpg";
import marAprPage37 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0037.jpg";
import marAprPage38 from "../acm-assets-2/magazine-2025/mar-apr-2025/Volume 6-Issue_2_mar-apr_pdf_page-0038.jpg";


import mayJunCover from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun(cover).jpg"
import mayJunePage1 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0001.jpg";
import mayJunePage2 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0002.jpg";
import mayJunePage3 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0003.jpg";
import mayJunePage4 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0004.jpg";
import mayJunePage5 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0005.jpg";
import mayJunePage6 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0006.jpg";
import mayJunePage7 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0007.jpg";
import mayJunePage8 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0008.jpg";
import mayJunePage9 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0009.jpg";
import mayJunePage10 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0010.jpg";
import mayJunePage11 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0011.jpg";
import mayJunePage12 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0012.jpg";
import mayJunePage13 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0013.jpg";
import mayJunePage14 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0014.jpg";
import mayJunePage15 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0015.jpg";
import mayJunePage16 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0016.jpg";
import mayJunePage17 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0017.jpg";
import mayJunePage18 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0018.jpg";
import mayJunePage19 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0019.jpg";
import mayJunePage20 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0020.jpg";
import mayJunePage21 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0021.jpg";
import mayJunePage22 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0022.jpg";
import mayJunePage23 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0023.jpg";
import mayJunePage24 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0024.jpg";
import mayJunePage25 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0025.jpg";
import mayJunePage26 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0026.jpg";
import mayJunePage27 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0027.jpg";
import mayJunePage28 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0028.jpg";
import mayJunePage29 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0029.jpg";
import mayJunePage30 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0030.jpg";
import mayJunePage31 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0031.jpg";
import mayJunePage32 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0032.jpg";
import mayJunePage33 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0033.jpg";
import mayJunePage34 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0034.jpg";
import mayJunePage35 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0035.jpg";
import mayJunePage36 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0036.jpg";
import mayJunePage37 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0037.jpg";
import mayJunePage38 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0038.jpg";
import mayJunePage39 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0039.jpg";
import mayJunePage40 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0040.jpg";
import mayJunePage41 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0041.jpg";
import mayJunePage42 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0042.jpg";
import mayJunePage43 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0043.jpg";
import mayJunePage44 from "../acm-assets-2/magazine-2025/may-jun-2025/Volume 6-Issue_3_may-jun_pdf_page-0044.jpg";


import julAugCover from "../acm-assets-2/magazine-latest-img/jul-aug-latest-img/jul-aug-latest-images-0.jpg";
import julAugPage1 from "../acm-assets-2/magazine-latest-img/jul-aug-latest-img/jul-aug-latest-images-1.jpg";
import julAugPage2 from "../acm-assets-2/magazine-latest-img/jul-aug-latest-img/jul-aug-latest-images-2.jpg";
import julAugPage3 from "../acm-assets-2/magazine-latest-img/jul-aug-latest-img/jul-aug-latest-images-3.jpg";
import julAugPage4 from "../acm-assets-2/magazine-latest-img/jul-aug-latest-img/jul-aug-latest-images-4.jpg";
import julAugPage5 from "../acm-assets-2/magazine-latest-img/jul-aug-latest-img/jul-aug-latest-images-5.jpg";
import julAugPage6 from "../acm-assets-2/magazine-latest-img/jul-aug-latest-img/jul-aug-latest-images-6.jpg";
import julAugPage7 from "../acm-assets-2/magazine-latest-img/jul-aug-latest-img/jul-aug-latest-images-7.jpg";
import julAugPage8 from "../acm-assets-2/magazine-latest-img/jul-aug-latest-img/jul-aug-latest-images-8.jpg";
import julAugPage9 from "../acm-assets-2/magazine-latest-img/jul-aug-latest-img/jul-aug-latest-images-9.jpg";
import julAugPage10 from "../acm-assets-2/magazine-latest-img/jul-aug-latest-img/jul-aug-latest-images-10.jpg";
import julAugPage11 from "../acm-assets-2/magazine-latest-img/jul-aug-latest-img/jul-aug-latest-images-11.jpg";
import julAugPage12 from "../acm-assets-2/magazine-latest-img/jul-aug-latest-img/jul-aug-latest-images-12.jpg";
import julAugPage13 from "../acm-assets-2/magazine-latest-img/jul-aug-latest-img/jul-aug-latest-images-13.jpg";
import julAugPage14 from "../acm-assets-2/magazine-latest-img/jul-aug-latest-img/jul-aug-latest-images-14.jpg";
import julAugPage15 from "../acm-assets-2/magazine-latest-img/jul-aug-latest-img/jul-aug-latest-images-15.jpg";


import sepOctCover from "../acm-assets-2/magazine-latest-img/sep-oct-latest-img/sep-oct-latest-images-0.jpg";
import sepOctPage1 from "../acm-assets-2/magazine-latest-img/sep-oct-latest-img/sep-oct-latest-images-1.jpg";
import sepOctPage2 from "../acm-assets-2/magazine-latest-img/sep-oct-latest-img/sep-oct-latest-images-2.jpg";
import sepOctPage3 from "../acm-assets-2/magazine-latest-img/sep-oct-latest-img/sep-oct-latest-images-3.jpg";
import sepOctPage4 from "../acm-assets-2/magazine-latest-img/sep-oct-latest-img/sep-oct-latest-images-4.jpg";
import sepOctPage5 from "../acm-assets-2/magazine-latest-img/sep-oct-latest-img/sep-oct-latest-images-5.jpg";
import sepOctPage6 from "../acm-assets-2/magazine-latest-img/sep-oct-latest-img/sep-oct-latest-images-6.jpg";
import sepOctPage7 from "../acm-assets-2/magazine-latest-img/sep-oct-latest-img/sep-oct-latest-images-7.jpg";
import sepOctPage8 from "../acm-assets-2/magazine-latest-img/sep-oct-latest-img/sep-oct-latest-images-8.jpg";
import sepOctPage9 from "../acm-assets-2/magazine-latest-img/sep-oct-latest-img/sep-oct-latest-images-9.jpg";
import sepOctPage10 from "../acm-assets-2/magazine-latest-img/sep-oct-latest-img/sep-oct-latest-images-10.jpg";
import sepOctPage11 from "../acm-assets-2/magazine-latest-img/sep-oct-latest-img/sep-oct-latest-images-11.jpg";
import sepOctPage12 from "../acm-assets-2/magazine-latest-img/sep-oct-latest-img/sep-oct-latest-images-12.jpg";
import sepOctPage13 from "../acm-assets-2/magazine-latest-img/sep-oct-latest-img/sep-oct-latest-images-13.jpg";
import sepOctPage14 from "../acm-assets-2/magazine-latest-img/sep-oct-latest-img/sep-oct-latest-images-14.jpg";
import sepOctPage15 from "../acm-assets-2/magazine-latest-img/sep-oct-latest-img/sep-oct-latest-images-15.jpg";
import sepOctPage16 from "../acm-assets-2/magazine-latest-img/sep-oct-latest-img/sep-oct-latest-images-16.jpg";
import sepOctPage17 from "../acm-assets-2/magazine-latest-img/sep-oct-latest-img/sep-oct-latest-images-17.jpg";
import sepOctPage18 from "../acm-assets-2/magazine-latest-img/sep-oct-latest-img/sep-oct-latest-images-18.jpg";
import sepOctPage19 from "../acm-assets-2/magazine-latest-img/sep-oct-latest-img/sep-oct-latest-images-19.jpg";
import sepOctPage20 from "../acm-assets-2/magazine-latest-img/sep-oct-latest-img/sep-oct-latest-images-20.jpg";

import novDecCover from "../acm-assets-2/magazine-latest-img/nov-dec-latest-img/nov-dec-latest-01.jpg";
import novDecPage1 from "../acm-assets-2/magazine-latest-img/nov-dec-latest-img/nov-dec-latest-02.jpg";
import novDecPage2 from "../acm-assets-2/magazine-latest-img/nov-dec-latest-img/nov-dec-latest-03.jpg";
import novDecPage3 from "../acm-assets-2/magazine-latest-img/nov-dec-latest-img/nov-dec-latest-04.jpg";
import novDecPage4 from "../acm-assets-2/magazine-latest-img/nov-dec-latest-img/nov-dec-latest-05.jpg";
import novDecPage5 from "../acm-assets-2/magazine-latest-img/nov-dec-latest-img/nov-dec-latest-06.jpg";
import novDecPage6 from "../acm-assets-2/magazine-latest-img/nov-dec-latest-img/nov-dec-latest-07.jpg";
import novDecPage7 from "../acm-assets-2/magazine-latest-img/nov-dec-latest-img/nov-dec-latest-08.jpg";
import novDecPage8 from "../acm-assets-2/magazine-latest-img/nov-dec-latest-img/nov-dec-latest-09.jpg";
import novDecPage9 from "../acm-assets-2/magazine-latest-img/nov-dec-latest-img/nov-dec-latest-10.jpg";
import novDecPage10 from "../acm-assets-2/magazine-latest-img/nov-dec-latest-img/nov-dec-latest-11.jpg";
import novDecPage11 from "../acm-assets-2/magazine-latest-img/nov-dec-latest-img/nov-dec-latest-12.jpg";
import novDecPage12 from "../acm-assets-2/magazine-latest-img/nov-dec-latest-img/nov-dec-latest-13.jpg";
import novDecPage13 from "../acm-assets-2/magazine-latest-img/nov-dec-latest-img/nov-dec-latest-14.jpg";
import novDecPage14 from "../acm-assets-2/magazine-latest-img/nov-dec-latest-img/nov-dec-latest-15.jpg";
import novDecPage15 from "../acm-assets-2/magazine-latest-img/nov-dec-latest-img/nov-dec-latest-16.jpg";
import novDecPage16 from "../acm-assets-2/magazine-latest-img/nov-dec-latest-img/nov-dec-latest-17.jpg";
import novDecPage17 from "../acm-assets-2/magazine-latest-img/nov-dec-latest-img/nov-dec-latest-18.jpg";
import novDecPage18 from "../acm-assets-2/magazine-latest-img/nov-dec-latest-img/nov-dec-latest-19.jpg";

const Flipbook = () => {
  const [currentBook, setCurrentBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isViewerOpen, setViewerOpen] = useState(false);

  const books = [
    {
      id: 1,
      cover: janFebCover,
      pages: [
        janFebPage1,
        janFebPage2,
        janFebPage3,
        janFebPage4,
        janFebPage5,
        janFebPage6,
        janFebPage7,
        janFebPage8,
        janFebPage9,
        janFebPage10,
        janFebPage11,
        janFebPage12,
        janFebPage13,
        janFebPage14,
        janFebPage15,
        janFebPage16,
        janFebPage17,
        janFebPage18,
        janFebPage19,
        janFebPage20,
        janFebPage21,
        janFebPage22,
        janFebPage23,
        janFebPage24,
        janFebPage25,
        janFebPage26,
        janFebPage27,
        janFebPage28,
        janFebPage29,
        janFebPage30,
        janFebPage31,
        janFebPage32,
        janFebPage33,
        janFebPage34,
        janFebPage35,
        janFebPage36,
        janFebPage37,
        janFebPage38,
        janFebPage39,
        janFebPage40,
        
      ],
      title: "Jan-Feb"
    },
    {
      id: 2,
      cover: marAprCover,
      pages: [
        marAprPage1,
        marAprPage2,
        marAprPage3,
        marAprPage4,
        marAprPage5,
        marAprPage6,
        marAprPage7,
        marAprPage8,
        marAprPage9,
        marAprPage10,
        marAprPage11,
        marAprPage12,
        marAprPage13,
        marAprPage14,
        marAprPage15,
        marAprPage16,
        marAprPage17,
        marAprPage18,
        marAprPage19,
        marAprPage20,
        marAprPage21,
        marAprPage22,
        marAprPage23,
        marAprPage24,
        marAprPage25,
        marAprPage26,
        marAprPage27,
        marAprPage28,
        marAprPage29,
        marAprPage30,
        marAprPage31,
        marAprPage32,
        marAprPage33,
        marAprPage34,
        marAprPage35,
        marAprPage36,
        marAprPage37,
        marAprPage38,
        
        
      ],
      title: "March-April"
    },
    {
      id: 3,
      cover: mayJunCover,
      pages: [
        mayJunePage1,
        mayJunePage2,
        mayJunePage3,
        mayJunePage4,
        mayJunePage5,
        mayJunePage6,
        mayJunePage7,
        mayJunePage8,
        mayJunePage9,
        mayJunePage10,
        mayJunePage11,
        mayJunePage12,
        mayJunePage13,
        mayJunePage14,
        mayJunePage15,
        mayJunePage16,
        mayJunePage17,
        mayJunePage18,
        mayJunePage19,
        mayJunePage20,
        mayJunePage21,
        mayJunePage22,
        mayJunePage23,
        mayJunePage24,
        mayJunePage25,
        mayJunePage26,
        mayJunePage27,
        mayJunePage28,
        mayJunePage29,
        mayJunePage30,
        mayJunePage31,
        mayJunePage32,
        mayJunePage33,
        mayJunePage34,
        mayJunePage35,
        mayJunePage36,
        mayJunePage37,
        mayJunePage38,
        mayJunePage39,
        mayJunePage40,
        mayJunePage41,
        mayJunePage42,
        mayJunePage43,
        mayJunePage44,

      ],
      title: "May-June"
    },
    {
      id: 4,
      cover: julAugCover,
      pages: [
        julAugPage1,
        julAugPage2,
        julAugPage3,
        julAugPage4,
        julAugPage5,
        julAugPage6,
        julAugPage7,
        julAugPage8,
        julAugPage9,
        julAugPage10,
        julAugPage11,
        julAugPage12,
        julAugPage13,
        julAugPage14,
        julAugPage15,
      ],
      title: "July-August"
    },
    {
      id: 5,
      cover: sepOctCover,
      pages: [
        sepOctPage1,
        sepOctPage2,
        sepOctPage3,
        sepOctPage4,
        sepOctPage5,
        sepOctPage6,
        sepOctPage7,
        sepOctPage8,
        sepOctPage9,
        sepOctPage10,
        sepOctPage11,
        sepOctPage12,
        sepOctPage13,
        sepOctPage14,
        sepOctPage15,
        sepOctPage16,
        sepOctPage17,
        sepOctPage18,
        sepOctPage19,
        sepOctPage20,

      ],
      title: "Sep-Oct"
    },
    {
      id: 6,
      cover: novDecCover,
      pages: [
        novDecPage1,
        novDecPage2,
        novDecPage3,
        novDecPage4,
        novDecPage5,
        novDecPage6,
        novDecPage7,
        novDecPage8,
        novDecPage9,
        novDecPage10,
        novDecPage11,
        novDecPage12,
        novDecPage13,
        novDecPage14,
        novDecPage15,
        novDecPage16,
        novDecPage17,
        novDecPage18,
      ],
      title: "Nov-Dec"
    }
  ];

  const openBookViewer = (book) => {
    setCurrentBook(book);
    setCurrentPage(0);
    setViewerOpen(true);
  };

  const closeBookViewer = () => {
    setViewerOpen(false);
    setCurrentBook(null);
    setCurrentPage(0);
  };

  const nextPage = () => {
    if (currentBook && currentPage < currentBook.pages.length - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <section className="md:mt-[200px] py-8">
        <div className="container mx-auto px-4">
          <h2 className="h2 text-center mb-12">Digital Outlet</h2>

          <div className="flex flex-wrap justify-center gap-8">
            {books.map((book) => (
              <div
                key={book.id}
                className="relative group perspective-1000"
              >
                <div
                  className="w-48 transition-transform duration-500 transform-gpu preserve-3d cursor-pointer group-hover:rotate-y-10 group-hover:scale-110"
                  onClick={() => openBookViewer(book)}
                >
                  <img
                    className="object-cover w-full h-64 rounded-lg shadow-lg"
                    src={book.cover}
                    alt={`${book.title} Cover`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/60 text-white text-base font-medium rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {book.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {isViewerOpen && currentBook && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900/95 z-50">
            <div 
              className="relative w-full max-w-4xl bg-transparent rounded-lg overflow-hidden animate-slideIn"
              style={{
                animationDuration: '0.5s',
                animationFillMode: 'forwards'
              }}
            >
              <div className="flex items-center justify-center h-[80vh]">
                <div className="relative w-full h-full flex items-center justify-center">
                  {currentBook.pages.map((page, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-500 transform ${
                        currentPage === index 
                          ? 'opacity-100 translate-x-0' 
                          : currentPage > index 
                            ? 'opacity-0 -translate-x-full' 
                            : 'opacity-0 translate-x-full'
                      }`}
                    >
                      <img 
                        className="max-w-full max-h-full object-contain mx-auto"
                        src={page} 
                        alt={`${currentBook.title} - Page ${index + 1}`} 
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                  Page {currentPage + 1} of {currentBook.pages.length}
                </div>
              </div>

              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white rounded-full p-4 hover:bg-white/20 transition-all duration-300"
                onClick={prevPage}
              >
                &#10094;
              </button>

              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white rounded-full p-4 hover:bg-white/20 transition-all duration-300"
                onClick={nextPage}
              >
                &#10095;
              </button>

              <button
                className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white rounded-full p-3 hover:bg-white/20 transition-all duration-300"
                onClick={closeBookViewer}
              >
                &#10006;
              </button>
            </div>
          </div>
        )}
      </section>
      <BottomLine />

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .rotate-y-10:hover {
          transform: rotateY(10deg);
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Flipbook;
