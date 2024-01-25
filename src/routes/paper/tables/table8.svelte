<script>
  export let key = "";
  let collapse = false;
  let alt = "This table shows a few data points in the penguins.json dataset."
</script>

<p>
  <strong
    ><a name={key}>Table 8</a>. A preview of the <code>penguins.json</code> dataset.</strong
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
    <table class="table" {alt}>
      <thead>
        <tr style="border-bottom: 1px solid #000000;">
          <th style="text-align:left;">
            <code>
              <tt>species</tt>
            </code>
          </th>
          <th style="text-align:left;">
            <code>
              <tt>island</tt>
            </code>
          </th>
          <th style="text-align:left;">
            <code>
              <tt>bodyMass</tt>
            </code>
          </th>
        </tr>
      </thead><tbody>
        <tr style="border-bottom: 1px solid #000000;">
          <td style="text-align:left;">Adelie</td>
          <td style="text-align:left;">Torgersen</td>
          <td style="text-align:left;">3,750</td>
        </tr>
        <tr style="border-bottom: 1px solid #000000;">
          <td style="text-align:left;">Adelie</td>
          <td style="text-align:left;">Biscoe</td>
          <td style="text-align:left;">4,300</td>
        </tr>
        <tr style="border-bottom: 1px solid #000000;">
          <td style="text-align:left;">Adelie</td>
          <td style="text-align:left;">Dream</td>
          <td style="text-align:left;">2,900</td>
        </tr>
        <tr style="border-bottom: 1px solid #000000;">
          <td style="text-align:left;">Chinstrap</td>
          <td style="text-align:left;">Dream</td>
          <td style="text-align:left;">3,450</td>
        </tr>
        <tr style="border-bottom: 1px solid #000000;">
          <td style="text-align:left;">Gentoo</td>
          <td style="text-align:left;">Biscoe</td>
          <td style="text-align:left;">6,300</td>
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
