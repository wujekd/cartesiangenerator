import tkinter as tk
from tkinter import filedialog
import wave
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg

class WaveformApp:
    def __init__(self, master):
        self.master = master
        self.master.title("Waveform Viewer")

        self.fig, self.ax = plt.subplots()
        self.canvas = FigureCanvasTkAgg(self.fig, master=self.master)
        self.canvas.get_tk_widget().pack(side=tk.TOP, fill=tk.BOTH, expand=1)

        self.load_button = tk.Button(self.master, text="Load Wave File", command=self.load_wave_file)
        self.load_button.pack(pady=10)

    def load_wave_file(self):
        file_path = filedialog.askopenfilename(filetypes=[("Wave files", "*.wav")])

        if file_path:
            self.display_waveform(file_path)

    def display_waveform(self, file_path):
        with wave.open(file_path, 'rb') as wave_file:
            framerate = wave_file.getframerate()
            nframes = wave_file.getnframes()

            # Read audio data
            audio_data = np.frombuffer(wave_file.readframes(nframes), dtype=np.int16)

            # Create time array based on frame rate and number of frames
            time = np.linspace(0., nframes / float(framerate), nframes)

            # Plot waveform
            self.ax.clear()
            self.ax.plot(time, audio_data, color='blue')
            self.ax.set_xlabel('Time (seconds)')
            self.ax.set_ylabel('Amplitude')
            self.ax.set_title('Waveform')

            # Draw canvas
            self.canvas.draw()

# Main program
if __name__ == "__main__":
    root = tk.Tk()
    app = WaveformApp(root)
    root.mainloop()
