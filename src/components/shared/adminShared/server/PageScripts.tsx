import React from 'react';
import Image from 'next/image';
const PageScripts = () => {
  return (
    <div className="h-full flex flex-col gap-5">
      <div className="bg-[#DBDBDB] dark:bg-[#0F1827] h-[200px] px-4 py-4 flex flex-col gap-6">
        <h2 className="font-bold text-[17px]">Сценарии</h2>
        <div className="flex gap-2 items-center">
          {/*<Image
            src="/icons-admin-svg/document-refresh.svg"
            alt="User Image"
            width={50}
            height={50}
            className="w-[60px] h-[45px]"
          />*/}
          <svg width="60" height="45" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_483_117)">
          <path opacity="0.760784" d="M128.5 8L313 8.5L128.5 9V8Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M107.5 16L106.5 18" stroke="black"/>
          <path opacity="0.760784" d="M134.5 17H305.5L307 18.5L306.5 103L306 18H134.5V17Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M102.5 20L100.5 23" stroke="black"/>
          <path opacity="0.760784" d="M115.5 22L114.5 24" stroke="black"/>
          <path opacity="0.760784" d="M112.5 24L111.5 26" stroke="black"/>
          <path opacity="0.760784" d="M97.5 26L96.5 28" stroke="black"/>
          <path opacity="0.760784" d="M104.5 32L103.5 34" stroke="black"/>
          <path opacity="0.760784" d="M97.5 49L98 52.5H97L97.5 49Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M70.5 63L73 63.5L70.5 64V63Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M73.5 72L76 72.5L73.5 73V72Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M147.5 72L274 72.5L147.5 73V72Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M47.5 75L45.5 78" stroke="black"/>
          <path opacity="0.760784" d="M283.5 76L287.5 81" stroke="black"/>
          <path opacity="0.760784" d="M58.5 78L57.5 80" stroke="black"/>
          <path opacity="0.760784" d="M42.5 81L41.5 83" stroke="black"/>
          <path opacity="0.760784" d="M278.5 84L279.5 86" stroke="black"/>
          <path opacity="0.760784" d="M50.5 86L49.5 88" stroke="black"/>
          <path opacity="0.760784" d="M48.5 89L47.5 91" stroke="black"/>
          <path opacity="0.760784" d="M129.5 89L130 152.5H129L129.5 89Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M281.5 89L282 151.5H281L281.5 89Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M33.5 104L34 461.5H33L33.5 104Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M312.5 121L313.5 123" stroke="black"/>
          <path opacity="0.760784" d="M314.5 124L315.5 126" stroke="black"/>
          <path opacity="0.760784" d="M330.5 127L331.5 129" stroke="black"/>
          <path opacity="0.760784" d="M317.5 128L322.5 134" stroke="black"/>
          <path opacity="0.760784" d="M333.5 129L334.5 131" stroke="black"/>
          <path opacity="0.760784" d="M345.5 134L348 134.5L345.5 135V134Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M325.5 135L326.5 137" stroke="black"/>
          <path opacity="0.760784" d="M442.5 139L443 343.5L445 345.5L442 343.5L442.5 139Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M352.5 144L433 144.5L352.5 145V144Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M140.5 155L142.5 158" stroke="black"/>
          <path opacity="0.760784" d="M146.5 159L274 159.5L146.5 160V159Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M132.5 160L133.5 162" stroke="black"/>
          <path opacity="0.760784" d="M136.5 164L137.5 166" stroke="black"/>
          <path opacity="0.760784" d="M132.5 210L406 210.5L132.5 211V210Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M407.5 211L408.5 213" stroke="black"/>
          <path opacity="0.760784" d="M408.5 217L407.5 219" stroke="black"/>
          <path opacity="0.760784" d="M129.5 264L130 266.5H129L129.5 264Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M130.5 268L131.5 270" stroke="black"/>
          <path opacity="0.760784" d="M364.5 268L363.5 270" stroke="black"/>
          <path opacity="0.760784" d="M133.5 270L362 270.5L133.5 271V270Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M131.5 312L130.5 314" stroke="black"/>
          <path opacity="0.760784" d="M129.5 315L130 317.5H129L129.5 315Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M130.5 319L131.5 321" stroke="black"/>
          <path opacity="0.760784" d="M389.5 329L402 329.5L389.5 330V329Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M384.5 339L387 339.5L384.5 340V339Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M346.5 345L345.5 347" stroke="black"/>
          <path opacity="0.760784" d="M447.5 347L449.5 350" stroke="black"/>
          <path opacity="0.760784" d="M341.5 349L332.5 359" stroke="black"/>
          <path opacity="0.760784" d="M438.5 352L439.5 354" stroke="black"/>
          <path opacity="0.760784" d="M351.5 353L350.5 355" stroke="black"/>
          <path opacity="0.760784" d="M442.5 355L444.5 358" stroke="black"/>
          <path opacity="0.760784" d="M346.5 357L341.5 363" stroke="black"/>
          <path opacity="0.760784" d="M458.5 358L460.5 361" stroke="black"/>
          <path opacity="0.760784" d="M143.5 360L253 360.5L143.5 361V360Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M391.5 360L401 360.5L391.5 361V360Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M259.5 362L260.5 364" stroke="black"/>
          <path opacity="0.760784" d="M449.5 362L452.5 366" stroke="black"/>
          <path opacity="0.760784" d="M462.5 363L463.5 365" stroke="black"/>
          <path opacity="0.760784" d="M133.5 364L132.5 366" stroke="black"/>
          <path opacity="0.760784" d="M327.5 365L326.5 367" stroke="black"/>
          <path opacity="0.760784" d="M464.5 366L465.5 368" stroke="black"/>
          <path opacity="0.760784" d="M337.5 367L336.5 369" stroke="black"/>
          <path opacity="0.760784" d="M423.5 368L424.5 370" stroke="black"/>
          <path opacity="0.760784" d="M454.5 368L455.5 370" stroke="black"/>
          <path opacity="0.760784" d="M254.5 370L255.5 372" stroke="black"/>
          <path opacity="0.760784" d="M387.5 370L390 370.5L387.5 371V370Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M426.5 370L428.5 373" stroke="black"/>
          <path opacity="0.760784" d="M363.5 371L360.5 375" stroke="black"/>
          <path opacity="0.760784" d="M129.5 372L130 405.5H129L129.5 372Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M256.5 373L257 404.5H256L256.5 373Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M458.5 374L459.5 376" stroke="black"/>
          <path opacity="0.760784" d="M358.5 376L355.5 380" stroke="black"/>
          <path opacity="0.760784" d="M421.5 378L423.5 381" stroke="black"/>
          <path opacity="0.760784" d="M368.5 379L363.5 385" stroke="black"/>
          <path opacity="0.760784" d="M435.5 379L436.5 381" stroke="black"/>
          <path opacity="0.760784" d="M427.5 384L429.5 387" stroke="black"/>
          <path opacity="0.760784" d="M323.5 397L324 399.5H323L323.5 397Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M477.5 398L478 400.5H477L477.5 398Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M429.5 399L428.5 401" stroke="black"/>
          <path opacity="0.760784" d="M313.5 400L314 403.5H313L313.5 400Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M449.5 400L447.5 403L446 402.5L449.5 400Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M468.5 401L469 403.5H468L468.5 401Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M427.5 402L428 404.5H427L427.5 402Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M322.5 404L323 407.5H322L322.5 404Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M346.5 404L336.5 415" stroke="black"/>
          <path opacity="0.760784" d="M97.5 405L98 408.5H97L97.5 405Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M139.5 405L140.5 407" stroke="black"/>
          <path opacity="0.760784" d="M428.5 406L439.5 418" stroke="black"/>
          <path opacity="0.760784" d="M142.5 407L254 407.5L142.5 408V407Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M478.5 407L479 417.5H478L478.5 407Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M88.5 409L89 411.5H88L88.5 409Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M131.5 410L132.5 412" stroke="black"/>
          <path opacity="0.760784" d="M262.5 412L261.5 414" stroke="black"/>
          <path opacity="0.760784" d="M134.5 413L135.5 415" stroke="black"/>
          <path opacity="0.760784" d="M322.5 416L323 420.5H322L322.5 416Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M333.5 418L334 420.5H333L333.5 418Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M441.5 418L445 418.5L441.5 419V418Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M343.5 420L345 420.5L341.5 423L343.5 420Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M468.5 420L469 422.5H468L468.5 420Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M313.5 421L314 423.5H313L313.5 421Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M362.5 422L361.5 424" stroke="black"/>
          <path opacity="0.760784" d="M105.5 426L110.5 432" stroke="black"/>
          <path opacity="0.760784" d="M97.5 431L98.5 433" stroke="black"/>
          <path opacity="0.760784" d="M359.5 434L360.5 436" stroke="black"/>
          <path opacity="0.760784" d="M361.5 437L363.5 440" stroke="black"/>
          <path opacity="0.760784" d="M430.5 437L434 437.5L430.5 438V437Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M104.5 438L105.5 440" stroke="black"/>
          <path opacity="0.760784" d="M127.5 439L130 439.5L127.5 440V439Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M436.5 440L437 443.5H436L436.5 440Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M354.5 443L355.5 445" stroke="black"/>
          <path opacity="0.760784" d="M368.5 444L369.5 446" stroke="black"/>
          <path opacity="0.760784" d="M435.5 445L429.5 452" stroke="black"/>
          <path opacity="0.760784" d="M321.5 449L322.5 451" stroke="black"/>
          <path opacity="0.760784" d="M458.5 450L457.5 452" stroke="black"/>
          <path opacity="0.760784" d="M333.5 451L334.5 453" stroke="black"/>
          <path opacity="0.760784" d="M363.5 452L364.5 454" stroke="black"/>
          <path opacity="0.760784" d="M456.5 453L455.5 455" stroke="black"/>
          <path opacity="0.760784" d="M335.5 454L336.5 456" stroke="black"/>
          <path opacity="0.760784" d="M391.5 454L401 454.5L391.5 455V454Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M453.5 457L452.5 459" stroke="black"/>
          <path opacity="0.760784" d="M338.5 458L340.5 461" stroke="black"/>
          <path opacity="0.760784" d="M464.5 458L463.5 460" stroke="black"/>
          <path opacity="0.760784" d="M461.5 462L460.5 464" stroke="black"/>
          <path opacity="0.760784" d="M43.5 463L44 465.5H43L43.5 463Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M388.5 463L391 463.5L388.5 464V463Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M401.5 463L404 463.5L401.5 464V463Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M331.5 464L333.5 467" stroke="black"/>
          <path opacity="0.760784" d="M346.5 466L349.5 470" stroke="black"/>
          <path opacity="0.760784" d="M457.5 467L451.5 474" stroke="black"/>
          <path opacity="0.760784" d="M441.5 469L440.5 471" stroke="black"/>
          <path opacity="0.760784" d="M352.5 471L353.5 473" stroke="black"/>
          <path opacity="0.760784" d="M355.5 473L356.5 475" stroke="black"/>
          <path opacity="0.760784" d="M341.5 474L343.5 477" stroke="black"/>
          <path opacity="0.760784" d="M48.5 477L49.5 479" stroke="black"/>
          <path opacity="0.760784" d="M446.5 477L445.5 479" stroke="black"/>
          <path opacity="0.760784" d="M51.5 481L55.5 486" stroke="black"/>
          <path opacity="0.760784" d="M381.5 484L384 484.5L381.5 485V484Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M388.5 485L395 485.5L388.5 486V485Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M396.5 485L403 485.5L396.5 486V485Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M43.5 486L50.5 494" stroke="black"/>
          <path opacity="0.760784" d="M58.5 487L59.5 489" stroke="black"/>
          <path opacity="0.760784" d="M361.5 487L362 488.5L360 489.5L361.5 487Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M370.5 493L369.5 495" stroke="black"/>
          <path opacity="0.760784" d="M410.5 493L413 493.5L410.5 494V493Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M79.5 494L343 494.5L79.5 495V494Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M385.5 494L389 494.5L385.5 495V494Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M403.5 494L407 494.5L403.5 495V494Z" fill="currentColor" stroke="black"/>
          <path opacity="0.760784" d="M53.5 495L54.5 497" stroke="black"/>
          <path opacity="0.760784" d="M74.5 503L347 503.5L74.5 504V503Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M313.5 8L441.5 137" stroke="black"/>
          <path opacity="0.223529" d="M111.5 13L110.5 15" stroke="black"/>
          <path opacity="0.223529" d="M105.5 17L103.5 20" stroke="black"/>
          <path opacity="0.223529" d="M127.5 18L130 18.5L127.5 19V18Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M99.5 23L97.5 26" stroke="black"/>
          <path opacity="0.223529" d="M316.5 25L425 133.5V135L348 134.5L424 133.5L316.5 25Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M110.5 26L105.5 32" stroke="black"/>
          <path opacity="0.223529" d="M87.5 51L88 61.5L86.5 63H74.5V62H87L87.5 51Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M97.5 53L98 404.5H97L97.5 53Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M54.5 69L53.5 71" stroke="black"/>
          <path opacity="0.223529" d="M50.5 72L48.5 75" stroke="black"/>
          <path opacity="0.223529" d="M76.5 72H87.5L88 72.5V406.5H87V73.5L86.5 73H76.5V72Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M144.5 72L147 72.5L144.5 73V72Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M137.5 75L135.5 78" stroke="black"/>
          <path opacity="0.223529" d="M44.5 78L42.5 81" stroke="black"/>
          <path opacity="0.223529" d="M133.5 79L132.5 81" stroke="black"/>
          <path opacity="0.223529" d="M56.5 80L51.5 86" stroke="black"/>
          <path opacity="0.223529" d="M146.5 82L274 82.5L146.5 83V82Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M142.5 84L141.5 86" stroke="black"/>
          <path opacity="0.223529" d="M291.5 91L292 150.5H291L291.5 91Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M43.5 103L44 106.5H43L43.5 103Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M306.5 103L307 105.5H306L306.5 103Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M323.5 120L329.5 127" stroke="black"/>
          <path opacity="0.223529" d="M315.5 126L316.5 128" stroke="black"/>
          <path opacity="0.223529" d="M323.5 134L324.5 136" stroke="black"/>
          <path opacity="0.223529" d="M346.5 144L352 144.5L346.5 145V144Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M279.5 155L277.5 158" stroke="black"/>
          <path opacity="0.223529" d="M287.5 161L286.5 163" stroke="black"/>
          <path opacity="0.223529" d="M133.5 162L135.5 165" stroke="black"/>
          <path opacity="0.223529" d="M284.5 164L283.5 166" stroke="black"/>
          <path opacity="0.223529" d="M147.5 169L273 169.5L147.5 170V169Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M130.5 218L131.5 220" stroke="black"/>
          <path opacity="0.223529" d="M131.5 261L129.5 264" stroke="black"/>
          <path opacity="0.223529" d="M363.5 261L364.5 263" stroke="black"/>
          <path opacity="0.223529" d="M133.5 311L332 311.5L133.5 312V311Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M334.5 319L333.5 321" stroke="black"/>
          <path opacity="0.223529" d="M132.5 321L332 321.5L132.5 322V321Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M385.5 329L389 329.5L385.5 330V329Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M402.5 329L406 329.5L402.5 330V329Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M387.5 339L391 339.5L387.5 340V339Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M401.5 339L405 339.5L401.5 340V339Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M445.5 345L446.5 347" stroke="black"/>
          <path opacity="0.223529" d="M344.5 346L342.5 349" stroke="black"/>
          <path opacity="0.223529" d="M433.5 349L434.5 351" stroke="black"/>
          <path opacity="0.223529" d="M450.5 349L458.5 358" stroke="black"/>
          <path opacity="0.223529" d="M436.5 351L437.5 353" stroke="black"/>
          <path opacity="0.223529" d="M440.5 354L441.5 356" stroke="black"/>
          <path opacity="0.223529" d="M349.5 355L347.5 358" stroke="black"/>
          <path opacity="0.223529" d="M445.5 358L448.5 362" stroke="black"/>
          <path opacity="0.223529" d="M331.5 359L330.5 361" stroke="black"/>
          <path opacity="0.223529" d="M140.5 360L143 360.5L140.5 361V360Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M253.5 360L256 360.5L253.5 361V360Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M388.5 360L391 360.5L388.5 361V360Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M461.5 361L462.5 363" stroke="black"/>
          <path opacity="0.223529" d="M135.5 362L134.5 364" stroke="black"/>
          <path opacity="0.223529" d="M261.5 363L262.5 365" stroke="black"/>
          <path opacity="0.223529" d="M328.5 363L327.5 365" stroke="black"/>
          <path opacity="0.223529" d="M340.5 364L338.5 367" stroke="black"/>
          <path opacity="0.223529" d="M452.5 366L453.5 368" stroke="black"/>
          <path opacity="0.223529" d="M336.5 369L335.5 371" stroke="black"/>
          <path opacity="0.223529" d="M365.5 369L364.5 371" stroke="black"/>
          <path opacity="0.223529" d="M142.5 370L254 370.5L142.5 371V370Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M390.5 370L394 370.5L390.5 371V370Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M398.5 370L402 370.5L398.5 371V370Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M455.5 370L456.5 372" stroke="black"/>
          <path opacity="0.223529" d="M140.5 371L139.5 373" stroke="black"/>
          <path opacity="0.223529" d="M334.5 372L333.5 374" stroke="black"/>
          <path opacity="0.223529" d="M429.5 372L435.5 379" stroke="black"/>
          <path opacity="0.223529" d="M266.5 373L267 403.5H266L266.5 373Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M359.5 374L357.5 377" stroke="black"/>
          <path opacity="0.223529" d="M419.5 377L420.5 379" stroke="black"/>
          <path opacity="0.223529" d="M370.5 378L369.5 380" stroke="black"/>
          <path opacity="0.223529" d="M424.5 381L426.5 384" stroke="black"/>
          <path opacity="0.223529" d="M437.5 381L438.5 383" stroke="black"/>
          <path opacity="0.223529" d="M439.5 384L440.5 386" stroke="black"/>
          <path opacity="0.223529" d="M354.5 385L355.5 387" stroke="black"/>
          <path opacity="0.223529" d="M363.5 385L362.5 387" stroke="black"/>
          <path opacity="0.223529" d="M429.5 387L430.5 389" stroke="black"/>
          <path opacity="0.223529" d="M431.5 398L434 398.5L431.5 399V398Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M452.5 398L455 398.5L452.5 399V398Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M456.5 399L457.5 401" stroke="black"/>
          <path opacity="0.223529" d="M478.5 402L479 406.5H478L478.5 402Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M351.5 404L363.5 417" stroke="black"/>
          <path opacity="0.223529" d="M468.5 404L469 408.5H468L468.5 404Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M255.5 405L254.5 407" stroke="black"/>
          <path opacity="0.223529" d="M344.5 405L334.5 416" stroke="black"/>
          <path opacity="0.223529" d="M312.5 406L313 417.5H312L312.5 406Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M457.5 406L446.5 418" stroke="black"/>
          <path opacity="0.223529" d="M322.5 408L323 415.5H322L322.5 408Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M264.5 410L263.5 412" stroke="black"/>
          <path opacity="0.223529" d="M132.5 412L133.5 414" stroke="black"/>
          <path opacity="0.223529" d="M468.5 416L469 419.5H468L468.5 416Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M478.5 418L479 421.5H478L478.5 418Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M323.5 422L324 424.5H323L323.5 422Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M355.5 422C357.5 423 357.5 424 355.5 425V422Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M95.5 429L96.5 431" stroke="black"/>
          <path opacity="0.223529" d="M112.5 432L113.5 434" stroke="black"/>
          <path opacity="0.223529" d="M98.5 433L103.5 439" stroke="black"/>
          <path opacity="0.223529" d="M434.5 437L436.5 440" stroke="black"/>
          <path opacity="0.223529" d="M428.5 438L426.5 441" stroke="black"/>
          <path opacity="0.223529" d="M130.5 439L317 439.5L130.5 440V439Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M106.5 440L107.5 442" stroke="black"/>
          <path opacity="0.223529" d="M364.5 440L367.5 444" stroke="black"/>
          <path opacity="0.223529" d="M352.5 441L353.5 443" stroke="black"/>
          <path opacity="0.223529" d="M423.5 443L421.5 446" stroke="black"/>
          <path opacity="0.223529" d="M355.5 445L362.5 453" stroke="black"/>
          <path opacity="0.223529" d="M128.5 449L321 449.5L128.5 450V449Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M428.5 452L427.5 454" stroke="black"/>
          <path opacity="0.223529" d="M365.5 454L366.5 456" stroke="black"/>
          <path opacity="0.223529" d="M467.5 454L466.5 456" stroke="black"/>
          <path opacity="0.223529" d="M337.5 456L338.5 458" stroke="black"/>
          <path opacity="0.223529" d="M326.5 458L327.5 460" stroke="black"/>
          <path opacity="0.223529" d="M451.5 459L442.5 469" stroke="black"/>
          <path opacity="0.223529" d="M43.5 460L44 462.5H43L43.5 460Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M463.5 460L462.5 462" stroke="black"/>
          <path opacity="0.223529" d="M341.5 461L345.5 466" stroke="black"/>
          <path opacity="0.223529" d="M33.5 462L34 464.5H33L33.5 462Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M329.5 462L330.5 464" stroke="black"/>
          <path opacity="0.223529" d="M385.5 463L388 463.5L385.5 464V463Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M460.5 464L458.5 467" stroke="black"/>
          <path opacity="0.223529" d="M333.5 467L340.5 475" stroke="black"/>
          <path opacity="0.223529" d="M350.5 469L351.5 471" stroke="black"/>
          <path opacity="0.223529" d="M439.5 470L438.5 472" stroke="black"/>
          <path opacity="0.223529" d="M450.5 474L448.5 477" stroke="black"/>
          <path opacity="0.223529" d="M344.5 477L345.5 479" stroke="black"/>
          <path opacity="0.223529" d="M50.5 479L51.5 481" stroke="black"/>
          <path opacity="0.223529" d="M348.5 480L349.5 482" stroke="black"/>
          <path opacity="0.223529" d="M41.5 484L42.5 486" stroke="black"/>
          <path opacity="0.223529" d="M405.5 484L408 484.5L405.5 485V484Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M372.5 492L375 492.5L371.5 494L372.5 492Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M346.5 493L349 493.5L346.5 494V493Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M51.5 494L52.5 496" stroke="black"/>
          <path opacity="0.223529" d="M368.5 495L367.5 497" stroke="black"/>
          <path opacity="0.223529" d="M392.5 495L400 495.5L392.5 496V495Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M71.5 503L74 503.5L71.5 504V503Z" fill="currentColor" stroke="black"/>
          <path opacity="0.223529" d="M347.5 503L350 503.5L347.5 504V503Z" fill="currentColor" stroke="black"/>
          <path opacity="0.996078" d="M124.5 9H313.5L442 137.5V343.5L444.5 346L458 357.5C465.4 365.767 471.067 375.767 475 387.5L478 401.5V423.5C473.533 447.033 463.367 464.867 447.5 477C439.433 483.6 429.767 488.6 418.5 492L402.5 495H389.5L372.5 492C366.967 497.467 359.633 501.133 350.5 503H70.5C57.9667 499.867 48.4667 493.7 42 484.5C38.2 479.3 35.5333 472.967 34 465.5V100.5C36.8 87.9667 42.6333 78.4667 51.5 72L64.5 65L73.5 63H88V48.5L91 37.5C94.2 29.3667 99.0333 22.8667 105.5 18C110.7 13.8667 117.033 10.8667 124.5 9ZM135 17L134 18H126L113 24C104.333 29.3333 99 38 97 50V409C98.3333 416.333 101 422.333 105 427C110.333 433.667 118 438 128 440H318L315 432L313 421V405L317 386C320.333 376.667 324.667 368.667 330 362C342 345.333 360 334.667 384 330H408L424 334L432 338H433V144H346C337.333 142.667 330.333 139.667 325 135C315.667 128.333 309.667 119 307 107V19L306 17H135ZM317 25L316 106L320 117L326 125L335 131L346 135H426L317 25ZM74 72L59 78C51 83.3333 45.6667 91.3333 43 102V466L51 482C55 486 60 489.333 66 492L80 495H343C343.667 493 346.333 492.667 351 494L361 490L362 487C353.333 484.333 346.333 480 341 474C333 468 327 460.333 323 451L322 449H128C118 447 110 443.333 104 438C95.3333 431.333 90 421.667 88 409V73V72H74ZM385 339C369 341.667 356.333 347.667 347 357L332 375L324 394L322 405V421L325 435C328.333 443.667 332.667 451.667 338 459L357 475L369 481L389 486H403L418 483C426.667 480.333 434.333 476.333 441 471C455.667 460.333 465 444.333 469 423V402L467 393C463.667 382.333 459 373.333 453 366C445.667 356.667 436.333 349.333 425 344L407 339H385Z" fill="currentColor" stroke="black"/>
          <path opacity="0.996078" d="M143.5 73H276.5C281.767 74.4 285.6 77.2333 288 81.5L291 89.5V152.5C289.867 158.7 287.033 163.2 282.5 166L274.5 169H145.5C140.5 168 136.667 165.833 134 162.5L130 155.5V86.5C131.533 82.0333 134.033 78.5333 137.5 76L143.5 73ZM146 82L144 83L139 89V154L140 156L147 160H274L277 159L282 152V90L280 86L276 82H146Z" fill="currentColor" stroke="black"/>
          <path opacity="0.996078" d="M131.5 211H406.5L409 213.5C409.533 216.7 408.7 218.533 406.5 219L404.5 220H134.5L130 217.5C129.2 214.033 129.7 211.867 131.5 211Z" fill="currentColor" stroke="black"/>
          <path opacity="0.996078" d="M133.5 261H361.5L365 263.5C365.666 267.167 364.833 269.333 362.5 270H132.5L130 267.5C129.333 264.5 129.833 262.667 131.5 262L133.5 261Z" fill="currentColor" stroke="black"/>
          <path opacity="0.996078" d="M132.5 312H331.5L334 313L335 317.5L334 320L331.5 321H132.5C130.166 320.333 129.333 318.167 130 314.5L132.5 312Z" fill="currentColor" stroke="black"/>
          <path opacity="0.996078" d="M139.5 361H255.5L263 365.5L266 371.5V405.5C265 409.833 262.833 413 259.5 415L253.5 417H141.5L133 413L130 407.5V370.5L135.5 363L139.5 361ZM142 370L139 373V406L143 408H254L257 405V374L256 372L255 370H142Z" fill="currentColor" stroke="black"/>
          <path opacity="0.996078" d="M386.5 361C398.233 359.6 407.567 360.6 414.5 364C422.7 367.467 429.533 372.3 435 378.5C441.2 384.634 444.867 392.8 446 403L451.5 399H454.5L457 400L458 404.5L445.5 418H440.5L428 405.5C427.333 401.834 428.167 399.667 430.5 399L436 400C433.733 390.467 428.9 383.134 421.5 378C416.633 374.2 410.633 371.534 403.5 370H387.5C377.033 372.534 368.867 377.367 363 384.5C363.533 386.034 363.033 386.534 361.5 386L356.5 387L354 382.5L359 375L368.5 368L386.5 361Z" fill="currentColor" stroke="black"/>
          <path opacity="0.996078" d="M347.5 404L351.5 405L363 416.5L364 419.5L360.5 424L354.5 422L355 423.5C357.266 433.567 362.1 441.067 369.5 446L385.5 454L400.5 455L411.5 452L426 443L429.5 438C433.033 437.2 435.2 437.7 436 439.5V444.5L426.5 454L410.5 462L400.5 464H391.5C390.5 462.333 388.166 462 384.5 463L369.5 457L356 445.5C349.933 439.033 346.266 430.533 345 420L339.5 424H336.5C334.166 423.333 333.333 421.167 334 417.5L335 415H336.5L347.5 404Z" fill="currentColor" stroke="black"/>
          </g>
          <defs>
          <clipPath id="clip0_483_117">
          <rect width="512" height="512" fill="white"/>
          </clipPath>
          </defs>
          </svg>

          <span className="font-light text-[14px]">
            Опредилите действие
          </span>
        </div>
      </div>
      <div className="bg-[#DBDBDB] dark:bg-[#0F1827] h-[90px] px-[45px] items-center flex gap-10">
        <div className="cursor-pointer flex items-center gap-2">
          <Image
            src="/ss.png"
            alt="copy"
            width={30}
            height={23}
            className="w-[30px] h-[23px]"
          />
          <span className="font-light text-[14px]">Добавить</span>
        </div>
        <div className="cursor-pointer flex items-center gap-2">
          <Image
            src="/copy.png"
            alt="copy"
            width={30}
            height={23}
            className="w-[30px] h-[23px]"
          />
          <span className="font-light text-[14px]">Изменить</span>
        </div>
        <div className="cursor-pointer flex items-center gap-2">
          <Image
            src="/delete.png"
            alt="copy"
            width={25}
            height={23}
            className="w-[25px] h-[23px]"
          />
          <span className="font-light text-[14px]">Удалить </span>
        </div>
        <div className="cursor-pointer flex items-center gap-2">
          <span className="font-light text-[14px]">Фильтр:</span>
          <div className="w-[140px] h-7 bg-[#919191]"></div>
        </div>
      </div>
      <div className="px-10 py-10 h-full overflow-hidden bg-[#DBDBDB] dark:bg-[#0F1827]">
        <div className="h-full overflow-y-auto table-scroll">
          <table className="w-full text-center bg-white dark:bg-[#070F19]">
            <thead className="bg-white dark:bg-[#070F19]">
              <tr className="border-b-2 border-[#DBDBDB] dark:border-[#585353]">
                <th className="p-2"></th>
                <th className="p-2 border-x-2 border-[#DBDBDB] dark:border-[#585353]">Название</th>
                <th className="p-2">Отключить </th>
                <th className="p-2 border-x-2 border-[#DBDBDB] dark:border-[#585353]">Описание</th>
                <th className="p-2 w-2/6"></th>
              </tr>
            </thead>

            <tbody>
              {Array.from({ length: 50 }).map((_, i) => (
                <tr key={i}>
                  <td className="p-2 border">{i + 1}</td>
                  <td className="p-2 border">Камера {i + 1}</td>
                  <td className="p-2 border">192.168.1.1</td>
                  <td className="p-2 border">1980 / 1080</td>
                  <td className=""></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PageScripts;