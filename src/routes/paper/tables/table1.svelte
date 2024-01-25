<script>
  import Cite from "../cite.svelte";
  export let key = "";
  let collapse = false;
</script>

<p>
  <strong
    ><a name={key}>Table 1</a>. Comparison of Erie to prior sonification
    toolkits. Abbreviations: VL (VoxLens and Sonifier.JS)<Cite
      content="sonifier,sharif2022:sonifier"
    ></Cite>, HC (Highcharts Sonification)<Cite content="walker2021:highchart"
    ></Cite>, WSS (Web Sonification Sandbox)<Cite content="wss:kondak2017"
    ></Cite>, SC (Soncification Cell)<Cite content="ossia:poret2023"></Cite>,
    AAG (Apple Audio Graph)<Cite content="apple:audioGraph"></Cite>, DGB
    (DataGoBoop)<Cite content="datagoboop"></Cite>, PR (PlayItByR)<Cite
      content="playitbyr"
    ></Cite>, XS (xSonify)<Cite content="xsonify:candey2006"></Cite>, SS
    (Sonification Sandbox)<Cite content="walker2003:sandbox"></Cite>, SY
    (SonifYer)<Cite content="sonifyer:dombois2008"></Cite>, IST (Interactive
    Sonification Toolkit)<Cite content="istk:pauletto"></Cite>, SW (Sonification
    Workstation)<Cite content="workstation:phillips2019"></Cite>, SA (SonArt)<Cite
      content="sonart:ben2002"
    ></Cite>, L (Listen)<Cite content="listen:wilson1996"></Cite>, M (MUSE)<Cite
      content="muse:lodha1997"
    ></Cite>, PS (Personify)<Cite content="personify:barrass2002"></Cite>, Str
    (Strauss)<Cite content="strauss:harrison2021"></Cite>, Sta (StarSound)<Cite
      content="starsound:hannam2014"
    ></Cite>, SD (SODA)<Cite content="soda:cibils2020"></Cite>, Eq (Equalizer),
    Pow (Power function), Sqrt (Square-root function), SymLog (Symmetric log
    function).</strong
  >
  <button
    class="collapse-button"
    aria-roledescription="Collapse button"
    on:click={() => {
      collapse = !collapse;
    }}>{!collapse ? "Collapse" : "Show"}</button
  >
</p>
{#if !collapse}
  <div class="table-wrapper">
    <table
      class="table"
      alt="This table has 21 columns for different sonification toolkits and 51 rows for different sonification design properties. These properties are categorized in terms of development environment, year, data, sound tone, encoding, audio filters, reference, composition, and API. Erie supports all the properties but circular pan. The other tools only support a few properties with common properties including freedom in encoding choices, pitch, loudness and stereo pan encoding channels."
    >
      <thead>
        <tr style="border-bottom: 1px solid #000000;">
          <th
            colspan="2"
            style="text-align:left;border-right: 1px solid #000000;"
            ><strong>Category</strong></th
          >
          <th style="text-align:left;border-right: 1px solid #000000;"
            ><strong>Property</strong></th
          >
          <th style="text-align:center;border-right: 1px solid #000000;"
            ><strong>Erie</strong></th
          >
          <th style="text-align:center;border-right: 1px solid #000000;"
            ><strong>VL</strong></th
          >
          <th style="text-align:center;border-right: 1px solid #000000;"
            ><strong>HC</strong></th
          >
          <th style="text-align:center;border-right: 1px solid #000000;"
            ><strong>WSS</strong></th
          >
          <th style="text-align:center;border-right: 1px solid #000000;"
            ><strong>AAG</strong></th
          >
          <th style="text-align:center;border-right: 1px solid #000000;"
            ><strong>DGB</strong></th
          >
          <th style="text-align:center;border-right: 1px solid #000000;"
            ><strong>PR</strong></th
          >
          <th style="text-align:center;border-right: 1px solid #000000;"
            ><strong>XS</strong></th
          >
          <th style="text-align:center;border-right: 1px solid #000000;"
            ><strong>SS</strong></th
          >
          <th style="text-align:center;border-right: 1px solid #000000;"
            ><strong>SY</strong></th
          >
          <th style="text-align:center;border-right: 1px solid #000000;"
            ><strong>IST</strong></th
          >
          <th style="text-align:center;border-right: 1px solid #000000;"
            ><strong>SW</strong></th
          >
          <th style="text-align:center;border-right: 1px solid #000000;"
            ><strong>SA</strong></th
          >
          <th style="text-align:center;border-right: 1px solid #000000;"
            ><strong>L</strong></th
          >
          <th style="text-align:center;border-right: 1px solid #000000;"
            ><strong>M</strong></th
          >
          <th style="text-align:center;border-right: 1px solid #000000;"
            ><strong>PS</strong></th
          >
          <th style="text-align:center;border-right: 1px solid #000000;"
            ><strong>Str</strong></th
          >
          <th style="text-align:center;border-right: 1px solid #000000;"
            ><strong>Sta</strong></th
          >
          <th style="text-align:center;border-right: 1px solid #000000;"
            ><strong>SD</strong></th
          >
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #000000;">
          <td
            colspan="3"
            style="text-align:left;border-right: 1px solid #000000;"
            >Environment</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">Web</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">Web</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">Web</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">Web</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;"
            >Swift</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">R</td>
          <td style="text-align:center;border-right: 1px solid #000000;">R</td>
          <td style="text-align:center;border-right: 1px solid #000000;"
            >Java</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;"
            >Java</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;"
            >Pure Data</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">C++</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">C++</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">C++</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">C</td>
          <td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;"
            >Python</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td></tr
        >
        <tr style="border-bottom: 1px solid #000000;">
          <td
            colspan="3"
            style="text-align:left;border-right: 1px solid #000000;">Year</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;"
            >2023</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;"
            >2022</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;"
            >2021</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;"
            >2017</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;"
            >2021</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;"
            >2020</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;"
            >2011</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;"
            >2006</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;"
            >2004</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;"
            >2008</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;"
            >2004</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;"
            >2019</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;"
            >2002</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;"
            >1996</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;"
            >1997</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;"
            >1995</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;"
            >2021</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;"
            >2020</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;"
            >2014</td
          >
        </tr>
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;">Data</td>
          <td style="text-align:left;border-right: 1px solid #000000;"
            >Trans-form</td
          >
          <td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Aggregate</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Bin</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Filter</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Calculate</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Density</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr style="border-bottom: 1px solid #000000;">
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td style="text-align:left;border-right: 1px solid #000000;"
            >Fold</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;"
            >○</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"
            >Sound tone</td
          >
          <td
            colspan="2"
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Speech</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
            >Instrument type</td
          >
          <td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Oscillator</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >FM Synth</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
        </tr>
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >AM Synth</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
        </tr>
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Musical</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
        </tr>
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Wave</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Noise</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Natural</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Via sampling</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Human vowel</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Via sampling</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            colspan="2"
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Instrument sampling</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr style="border-bottom: 1px solid #000000;">
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            colspan="2"
            style="text-align:left;border-right: 1px solid #000000;"
            >Continuous/discrete sounds</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;"
            >○</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;"
            >○</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"
            >Encoding</td
          >
          <td
            colspan="2"
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Freedom</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
        </tr>
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            colspan="2"
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Ramping</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
            >Channels</td
          >
          <td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Time-start</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Time-end</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Duration</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
        </tr>
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Speed/Tempo</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Count</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Pitch/detune</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
        </tr>
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Loudness</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
        </tr>
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Stereo pan</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Circular pan</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Timbre</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >MI</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Harmonicity</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Reverb</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Speech</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Highpass filter</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Via preset filter</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Lowpass filter</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Via preset filter</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Envelope</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Via preset filter</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Distortion</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Via preset filter</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Repeat</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            colspan="2"
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Custom channels</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;">Scale</td
          >
          <td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Data type</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
        </tr>
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Domain/range</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
        </tr>
        <tr>
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Polarity</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr style="border-bottom: 1px solid #000000;">
          <td style="text-align:left;border-right: 1px solid #000000;"> </td><td
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td style="text-align:left;border-right: 1px solid #000000;"
            >Transform</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;"
            >Log/Pow/Sqrt/SymLog</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;"
            >Log</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td></tr
        >
        <tr>
          <td
            colspan="3"
            style="text-align:left;border-right: 1px solid #000000;"
            >Audio filters</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;"
            >Biquad</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;"
            >High/lowpass</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;"
            >Eq</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;"
            >Eq</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;"
            >Eq</td
          >
        </tr>
        <tr>
          <td
            colspan="3"
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;"
            >Compressor</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td></tr
        >
        <tr>
          <td
            colspan="3"
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;"
            >Envelope</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td></tr
        >
        <tr style="border-bottom: 1px solid #000000;">
          <td
            colspan="3"
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;"
            >Distorter</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td></tr
        >
        <tr>
          <td
            colspan="2"
            style="text-align:left;border-right: 1px solid #000000;"
            >Reference</td
          >
          <td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Tick</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr style="border-bottom: 1px solid #000000;">
          <td
            colspan="2"
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td style="text-align:left;border-right: 1px solid #000000;"
            >Audio legend</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;"
            >○</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td></tr
        >
        <tr>
          <td
            colspan="2"
            style="text-align:left;border-right: 1px solid #000000;"
            >Composition</td
          >
          <td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Sequence</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td></tr
        >
        <tr>
          <td
            colspan="2"
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td
            style="text-align:left;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >Overlay</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
          >
          </td><td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;border-bottom: 1px solid #000000;"
            >○</td
          >
        </tr>
        <tr style="border-bottom: 1px solid #000000;">
          <td
            colspan="2"
            style="text-align:left;border-right: 1px solid #000000;"
          >
          </td><td style="text-align:left;border-right: 1px solid #000000;"
            >Repetition</td
          >
          <td
            style="text-align:center;background-color:#ff9900;color:white;border-right: 1px solid #000000;"
            >○</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td></tr
        >
        <tr style="border-bottom: 1px solid #000000;">
          <td
            colspan="3"
            style="text-align:left;border-right: 1px solid #000000;">API</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;"
            >○</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;"
            >○</td
          >
          <td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;"
            >○</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td><td
            style="text-align:center;background-color:#e06619;color:white;border-right: 1px solid #000000;"
            >○</td
          >
          <td style="text-align:center;border-right: 1px solid #000000;">
          </td><td style="text-align:center;border-right: 1px solid #000000;">
          </td></tr
        >
      </tbody>
    </table>
  </div>
{/if}

<style>
  table {
    border-collapse: collapse;
    border: 1px solid #000;
    color: #454545;
  }
  td,
  th {
    padding: 0.15rem 0.25rem;
  }
</style>
