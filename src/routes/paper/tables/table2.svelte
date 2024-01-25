<script>
  export let key = "";
  import Ref from "../ref.svelte";
  let collapse = false;
</script>

<p>
  <strong
    ><a name={key}>Table 2</a>. The results of data transforms in <Ref
      key="grammar-walkthrough"
    ></Ref>.</strong
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
      alt="This table shows the results of data transformations for binning as described in Section 5.1. There are three columns for miles per gallon bin, miles per gallon bin end, and count. There are nine data rows for nine bins."
    >
      <thead>
        <tr style="border-bottom: 1px solid #000000;">
          <th style="text-align:left;"
            ><strong><em>miles−per−gallon−bin</em></strong></th
          >
          <th style="text-align:left;"
            ><strong><em>miles−per−gallon−bin−end</em></strong></th
          >
          <th style="text-align:left;"><strong><em>count</em></strong></th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid #000000;">
          <td style="text-align:left;">5</td>
          <td style="text-align:left;">10</td>
          <td style="text-align:left;">1</td>
        </tr>
        <tr style="border-bottom: 1px solid #000000;">
          <td style="text-align:left;">10</td>
          <td style="text-align:left;">15</td>
          <td style="text-align:left;">52</td>
        </tr>
        <tr style="border-bottom: 1px solid #000000;">
          <td style="text-align:left;">15</td>
          <td style="text-align:left;">20</td>
          <td style="text-align:left;">98</td>
        </tr>
        <tr style="border-bottom: 1px solid #000000;">
          <td style="text-align:left;">20</td>
          <td style="text-align:left;">25</td>
          <td style="text-align:left;">78</td>
        </tr>
        <tr style="border-bottom: 1px solid #000000;">
          <td style="text-align:left;">25</td>
          <td style="text-align:left;">30</td>
          <td style="text-align:left;">77</td>
        </tr>
        <tr style="border-bottom: 1px solid #000000;">
          <td style="text-align:left;">30</td>
          <td style="text-align:left;">35</td>
          <td style="text-align:left;">56</td>
        </tr>
        <tr style="border-bottom: 1px solid #000000;">
          <td style="text-align:left;">35</td>
          <td style="text-align:left;">40</td>
          <td style="text-align:left;">27</td>
        </tr>
        <tr style="border-bottom: 1px solid #000000;">
          <td style="text-align:left;">40</td>
          <td style="text-align:left;">45</td>
          <td style="text-align:left;">8</td>
        </tr>
        <tr style="border-bottom: 1px solid #000000;">
          <td style="text-align:left;">45</td>
          <td style="text-align:left;">50</td>
          <td style="text-align:left;">1</td>
        </tr>
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
