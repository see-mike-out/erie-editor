<script>
  export let key = "";
  import AudioTable3 from "../audio/audio-table3.svelte";
  import Ref from "../ref.svelte";
  let collapse = false;
  let alt =
    "This table describes the audio queue of the resulting auditory histogram as specified in Section 5.1. The first queue item is a speech queue for 'start playing' The second queue item is a tone queue for the nine histogram bins with their auditory properties including start time, end time, duration, timbre, and pitch in Hertz. The last queue is a speech queue for 'finished.'";
</script>

<p>
  <strong
    ><a name={key}>Table 3</a>. The sonification output for an auditory
    histogram in <Ref key="grammar-walkthrough"></Ref>. Units: seconds (start,
    end, duration) and Hz (pitch). "Sine" means a sinusoidal oscillator. The
    results of data transforms in.</strong
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
  <div>
    <AudioTable3></AudioTable3>
  </div>
{/if}

<!-- <div class="table-wrapper">
  <table class="table queue" {alt}>
    <thead>
      <tr style="border-bottom: 1px solid #000000;">
        <th style="text-align:left;"><strong>#</strong></th>
        <th style="text-align:left;"><strong>Type</strong></th>
        <th style="text-align:left;border-right: 1px solid #000000;"
          ><strong>Sound</strong></th
        >
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #000000;">
        <td style="text-align:left;">1</td>
        <td style="text-align:left;">Speech</td>
        <td style="text-align:left;border-right: 1px solid #000000;"
          >Start playing.</td
        >
      </tr>
      <tr style="border-bottom: 1px solid #000000;">
        <td style="text-align:left;">2</td>
        <td style="text-align:left;">Tone</td>
        <td style="text-align:left;border-right: 1px solid #000000;">
          <table>
            <tbody>
              <tr>
                <td style="text-align:left;">
                  <table>
                    <tbody>
                      <tr style="border-bottom: 1px solid #000000;">
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Start</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">0</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>End</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">0.5</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Duration</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">0.5</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Timbre</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">Sine</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Pitch</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">224.4</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr style="border-bottom: 1px solid #000000;">
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Start</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">0.5</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>End</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">1</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Duration</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">0.5</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Timbre</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">Sine</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Pitch</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">448.8</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr style="border-bottom: 1px solid #000000;">
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Start</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">1</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>End</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">1.5</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Duration</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">0.5</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Timbre</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">Sine</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Pitch</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">652.2</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr style="border-bottom: 1px solid #000000;">
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Start</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">1.5</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>End</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">2</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Duration</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">0.5</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Timbre</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">Sine</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Pitch</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">563.2</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr style="border-bottom: 1px solid #000000;">
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Start</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">2</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>End</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">2.5</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Duration</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">0.5</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Timbre</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">Sine</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Pitch</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">558.8</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr style="border-bottom: 1px solid #000000;">
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Start</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">2.5</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>End</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">3</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Duration</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">0.5</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Timbre</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">Sine</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Pitch</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">466.4</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr style="border-bottom: 1px solid #000000;">
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Start</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">3</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>End</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">3.5</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Duration</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">0.5</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Timbre</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">Sine</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Pitch</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">338.8</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr style="border-bottom: 1px solid #000000;">
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Start</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">3.5</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>End</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">4</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Duration</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">0.5</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Timbre</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">Sine</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Pitch</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">255.2</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Start</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">4</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>End</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">4.5</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Duration</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">0.5</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Timbre</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">Sine</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align:left;">
                          <table>
                            <tbody>
                              <tr>
                                <td style="text-align:left;">
                                  <span color="#4D4D4D"
                                    ><strong>Pitch</strong></span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align:left;">224.4</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr style="border-bottom: 1px solid #000000;">
        <td style="text-align:left;">3</td>
        <td style="text-align:left;">Speech</td>
        <td style="text-align:left;border-right: 1px solid #000000;"
          >Finished.</td
        >
      </tr>
    </tbody>
  </table>
</div> -->

<style>
  table {
    border-collapse: collapse;
    border: 1px solid #000;
    color: #454545;
  }
  table.queue > tbody > tr:nth-child(2n + 1) {
    background-color: rgba(0, 0, 0, 0.05);
  }
  table table {
    border-collapse: collapse;
    border: 0;
    color: #454545;
  }
  td,
  th {
    padding: 0.15rem 0.25rem;
  }
</style>
