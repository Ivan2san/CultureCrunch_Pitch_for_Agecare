import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Smartphone, Tablet, Monitor, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useParallax } from "@/hooks/useParallax";

interface Device {
  id: string;
  name: string;
  width: number;
  height: number;
  icon: typeof Smartphone;
}

const devices: Device[] = [
  { id: "desktop", name: "Desktop (Full Size)", width: 1440, height: 900, icon: Monitor },
  { id: "tablet", name: "Tablet", width: 768, height: 1024, icon: Tablet },
  { id: "iphone-se", name: "iPhone SE", width: 375, height: 667, icon: Smartphone },
  { id: "iphone-air", name: "iPhone Air", width: 390, height: 844, icon: Smartphone },
  { id: "iphone-15", name: "iPhone 15", width: 393, height: 852, icon: Smartphone },
  { id: "iphone-15-plus", name: "iPhone 15 Plus", width: 430, height: 932, icon: Smartphone },
  { id: "iphone-17", name: "iPhone 17", width: 393, height: 852, icon: Smartphone },
  { id: "iphone-17-pro", name: "iPhone 17 Pro", width: 393, height: 852, icon: Smartphone },
  { id: "iphone-17-pro-max", name: "iPhone 17 Pro Max", width: 430, height: 932, icon: Smartphone },
  { id: "pixel-10", name: "Pixel 10", width: 412, height: 915, icon: Smartphone },
  { id: "pixel-10-pro", name: "Pixel 10 Pro", width: 412, height: 915, icon: Smartphone },
  { id: "pixel-10-pro-xl", name: "Pixel 10 Pro XL", width: 412, height: 915, icon: Smartphone },
  { id: "galaxy-s25", name: "Samsung Galaxy S25", width: 360, height: 780, icon: Smartphone },
  { id: "galaxy-s25-plus", name: "Samsung Galaxy S25+", width: 384, height: 824, icon: Smartphone },
  { id: "galaxy-s25-ultra", name: "Samsung Galaxy S25 Ultra", width: 412, height: 915, icon: Smartphone },
];

const responsiveFeatures = [
  "Optimized navigation for all screen sizes",
  "Touch-friendly pulse survey interface",
  "Adaptive dashboard layout",
  "Mobile-first email notifications",
  "Responsive charts and visualizations"
];

export default function ResponsiveShowcase() {
  const [selectedDevice, setSelectedDevice] = useState<Device>(devices[0]);
  const headerParallax = useParallax({ speed: -0.1 });
  const deviceParallax = useParallax({ speed: 0.08 });

  const handleDeviceChange = (deviceId: string) => {
    const device = devices.find(d => d.id === deviceId);
    if (device) {
      setSelectedDevice(device);
    }
  };

  const Icon = selectedDevice.icon;

  const aspectRatio = selectedDevice.width / selectedDevice.height;
  const maxWidth = selectedDevice.width > 500 ? 600 : 400;
  const calculatedWidth = Math.min(selectedDevice.width * 0.7, maxWidth);
  const calculatedHeight = calculatedWidth / aspectRatio;

  return (
    <div id="responsive" className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div ref={headerParallax.ref} style={headerParallax.style} className="text-center mb-12">
          <Badge variant="outline" className="mb-4" data-testid="badge-responsive-section">
            Responsive Design
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="heading-responsive">
            Works Seamlessly Across All Devices
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8" data-testid="text-responsive-description">
            From leadership dashboards on desktop to frontline pulse surveys on mobile—
            CultureCrunch adapts to your team's workflow
          </p>

          <div className="flex justify-center mb-12">
            <Select value={selectedDevice.id} onValueChange={handleDeviceChange}>
              <SelectTrigger className="w-72" data-testid="select-device-trigger">
                <SelectValue placeholder="Select a device" />
              </SelectTrigger>
              <SelectContent data-testid="select-device-content">
                {devices.map((device) => (
                  <SelectItem key={device.id} value={device.id} data-testid={`select-device-${device.id}`}>
                    {device.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={deviceParallax.ref} style={deviceParallax.style} className="flex justify-center">
            <Card 
              className="relative overflow-hidden bg-gray-900 shadow-2xl p-3"
              style={{
                width: `${calculatedWidth}px`,
                height: `${calculatedHeight}px`,
                borderRadius: selectedDevice.id === 'desktop' ? '12px' : '32px',
              }}
              data-testid="device-mockup"
            >
              <div 
                className="w-full h-full bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 rounded-lg flex items-center justify-center"
                style={{
                  borderRadius: selectedDevice.id === 'desktop' ? '8px' : '24px',
                }}
              >
                <div className="text-center p-8">
                  <Icon className="w-20 h-20 mx-auto mb-4 text-purple-600" data-testid="icon-device-type" />
                  <h3 className="text-2xl font-bold text-foreground mb-2" data-testid="text-device-name">
                    {selectedDevice.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4" data-testid="text-device-dimensions">
                    {selectedDevice.width} × {selectedDevice.height}px
                  </p>
                  <Badge variant="secondary" className="text-xs" data-testid="badge-device-optimized">
                    Fully Optimized
                  </Badge>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6" data-testid="heading-responsive-features">
              Mobile-First Experience
            </h3>
            <div className="space-y-4">
              {responsiveFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 hover-elevate transition-all"
                  data-testid={`feature-item-${index}`}
                >
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">{feature}</p>
                </div>
              ))}
            </div>

            <div 
              className="mt-8 p-6 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800"
              data-testid="callout-why-matters"
            >
              <p className="text-sm text-purple-900 dark:text-purple-200 font-medium" data-testid="text-why-matters">
                <strong>Why It Matters:</strong> Aged care staff work across shifts and locations. 
                A mobile-optimized experience means frontline teams can complete their 3-question pulse 
                survey in under 60 seconds—on any device, anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
