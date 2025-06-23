'use client';

import Button from '@/components/ui/Button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/Card';
import Tag from '@/components/ui/Tag';
import Badge from '@/components/ui/Badge';
import GlassCard from '@/components/ui/GlassCard';
import Logo from '@/components/ui/Logo';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { LogoGithub, Launch, Settings, User, Email } from '@carbon/icons-react';
import { useState } from 'react';
import { designTokens } from '@/lib/designTokens';

export default function DesignSystemPage() {
  const [removableTag, setRemovableTag] = useState(true);

  // Design tokens from Tailwind config
  const colorTokens = {
    gray: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
    blue: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
    green: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
    yellow: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
    red: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
  };

  const spacingTokens = ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32'];
  const typographyTokens = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl'];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🎨 Design System
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            A comprehensive collection of reusable components, design tokens, and patterns 
            built with Tailwind CSS for consistent user experiences. Perfect for your next project!
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              href="https://github.com/mirkotrotta/moon-site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <LogoGithub size={20} />
              View on GitHub
            </a>
            <a
              href="https://github.com/mirkotrotta/moon-site/generate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Launch size={20} />
              Use This Template
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#components" className="text-blue-600 hover:text-blue-800 font-medium">
              Components
            </a>
            <a href="#tokens" className="text-blue-600 hover:text-blue-800 font-medium">
              Design Tokens
            </a>
            <a href="#colors" className="text-blue-600 hover:text-blue-800 font-medium">
              Colors
            </a>
            <a href="#typography" className="text-blue-600 hover:text-blue-800 font-medium">
              Typography
            </a>
            <a href="#spacing" className="text-blue-600 hover:text-blue-800 font-medium">
              Spacing
            </a>
          </div>
        </nav>

        {/* Brand Identity Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Brand Identity</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <GlassCard className="text-center">
              <h3 className="text-lg font-semibold mb-4">Small Logo</h3>
              <Logo size="sm" />
            </GlassCard>
            <GlassCard className="text-center">
              <h3 className="text-lg font-semibold mb-4">Medium Logo</h3>
              <Logo size="md" />
            </GlassCard>
            <GlassCard className="text-center">
              <h3 className="text-lg font-semibold mb-4">Large Logo</h3>
              <Logo size="lg" />
            </GlassCard>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard className="text-center">
              <h3 className="text-lg font-semibold mb-4">Icon Only</h3>
              <Logo showText={false} />
            </GlassCard>
            <Card className="text-center">
              <CardContent>
                <h3 className="text-lg font-semibold mb-4">On Standard Background</h3>
                <Logo />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Components Section */}
        <section id="components" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Components</h2>
          
          {/* Button Component */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Button</h3>
            <Card className="mb-6">
              <CardHeader>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Variants</h4>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 mb-6">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link Button</Button>
                </div>
                <h5 className="text-md font-medium text-gray-900 dark:text-white mb-4">Sizes</h5>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <Button size="sm" variant="primary">Small</Button>
                  <Button size="md" variant="primary">Medium</Button>
                  <Button size="lg" variant="primary">Large</Button>
                  <Button size="xl" variant="primary">Extra Large</Button>
                </div>
                <h5 className="text-md font-medium text-gray-900 dark:text-white mb-4">With Icons & Arrows</h5>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" showArrow>With Arrow</Button>
                  <Button variant="outline" icon={<Settings size={16} />}>With Icon</Button>
                  <Button variant="secondary" icon={<Email size={16} />} showArrow>Icon + Arrow</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Card Component */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Card</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card variant="default">
                <CardHeader>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Default Card</h4>
                </CardHeader>
                <CardContent>
                  <p>This is a default card with standard styling and subtle border.</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" variant="primary">Learn More</Button>
                </CardFooter>
              </Card>

              <Card variant="outlined">
                <CardHeader>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Outlined Card</h4>
                </CardHeader>
                <CardContent>
                  <p>This is an outlined card with transparent background and prominent border.</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" variant="tertiary">Explore</Button>
                </CardFooter>
              </Card>

              <Card variant="elevated">
                <CardHeader>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Elevated Card</h4>
                </CardHeader>
                <CardContent>
                  <p>This is an elevated card with shadow for depth and emphasis.</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" variant="secondary">Get Started</Button>
                </CardFooter>
              </Card>
            </div>

            <Card className="mb-6">
              <CardHeader>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Padding Variants</h4>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Card padding="sm" variant="outlined">
                    <p className="text-sm">Small padding card</p>
                  </Card>
                  <Card padding="md" variant="outlined">
                    <p className="text-sm">Medium padding card (default)</p>
                  </Card>
                  <Card padding="lg" variant="outlined">
                    <p className="text-sm">Large padding card</p>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tag Component */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Tag</h3>
            <Card className="mb-6">
              <CardHeader>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Variants</h4>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3 mb-6">
                  <Tag variant="default">Default</Tag>
                  <Tag variant="primary">Primary</Tag>
                  <Tag variant="secondary">Secondary</Tag>
                  <Tag variant="success">Success</Tag>
                  <Tag variant="warning">Warning</Tag>
                  <Tag variant="error">Error</Tag>
                </div>
                <h5 className="text-md font-medium text-gray-900 dark:text-white mb-4">Sizes</h5>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <Tag size="sm" variant="primary">Small</Tag>
                  <Tag size="md" variant="primary">Medium</Tag>
                  <Tag size="lg" variant="primary">Large</Tag>
                </div>
                <h5 className="text-md font-medium text-gray-900 dark:text-white mb-4">Interactive</h5>
                <div className="flex flex-wrap gap-3">
                  {removableTag && (
                    <Tag 
                      variant="primary" 
                      removable 
                      onRemove={() => setRemovableTag(false)}
                    >
                      Removable Tag
                    </Tag>
                  )}
                  <Tag variant="success" removable>Tech Stack</Tag>
                  <Tag variant="warning" removable>JavaScript</Tag>
                  <Tag variant="error" removable>React</Tag>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Badge Component */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Badge</h3>
            <Card className="mb-6">
              <CardHeader>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Variants</h4>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="neutral">Neutral</Badge>
                </div>
                <h5 className="text-md font-medium text-gray-900 dark:text-white mb-4">Status Indicators</h5>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Online</span>
                    <Badge variant="success" dot />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Busy</span>
                    <Badge variant="primary" dot />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Away</span>
                    <Badge variant="neutral" dot />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Live</span>
                    <Badge variant="secondary" dot animate />
                  </div>
                </div>
                <h5 className="text-md font-medium text-gray-900 dark:text-white mb-4">Interactive Examples</h5>
                <div className="flex flex-wrap items-center gap-4">
                  <Badge variant="primary" animate>🚀 Live Demo</Badge>
                  <Badge variant="success">✅ Production Ready</Badge>
                  <Badge variant="secondary">🎨 Design System</Badge>
                  <Badge variant="neutral">📦 Open Source</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Glass Card Component */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Glass Morphism Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <GlassCard blur="sm">
                <h4 className="font-semibold mb-2">Small Blur</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Perfect for subtle overlay effects and modern UI elements.
                </p>
              </GlassCard>
              <GlassCard blur="md">
                <h4 className="font-semibold mb-2">Medium Blur</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Great for hero sections and prominent content areas.
                </p>
              </GlassCard>
              <GlassCard blur="lg">
                <h4 className="font-semibold mb-2">Large Blur</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Ideal for modal overlays and focus-drawing elements.
                </p>
              </GlassCard>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <GlassCard padding="sm" rounded="xl">
                <div className="flex items-center gap-3">
                  <User size={20} />
                  <div>
                    <h4 className="font-semibold">Compact Card</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Small padding, extra rounded</p>
                  </div>
                </div>
              </GlassCard>
              <GlassCard padding="xl" rounded="sm">
                <div className="text-center">
                  <Settings size={24} className="mx-auto mb-2" />
                  <h4 className="font-semibold">Spacious Card</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Extra padding, subtle rounding</p>
                </div>
              </GlassCard>
            </div>
            <Card>
              <CardHeader>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Usage Examples</h4>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <GlassCard className="flex items-center gap-3">
                    <Badge variant="secondary" dot animate />
                    <div>
                      <h5 className="font-semibold">Live Status</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Real-time updates</p>
                    </div>
                  </GlassCard>
                  <GlassCard className="text-center">
                    <Logo size="sm" />
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Brand showcase</p>
                  </GlassCard>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Design Tokens Section */}
        <section id="tokens" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Design Tokens</h2>
          
          {/* Colors */}
          <div id="colors" className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Colors</h3>
            <div className="space-y-8">
              {Object.entries(colorTokens).map(([colorName, shades]) => (
                <Card key={colorName}>
                  <CardHeader>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white capitalize">
                      {colorName}
                    </h4>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                      {shades.map((shade) => (
                        <div key={shade} className="text-center">
                          <div 
                            className={`w-12 h-12 rounded-lg mb-2 border border-gray-200 dark:border-gray-600 bg-${colorName}-${shade}`}
                          />
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {shade}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div id="typography" className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Typography</h3>
            <Card>
              <CardHeader>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Text Sizes</h4>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {typographyTokens.map((size) => (
                    <div key={size} className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                      <span className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                        text-{size}
                      </span>
                      <span className={`text-${size} text-gray-900 dark:text-white`}>
                        The quick brown fox jumps over the lazy dog
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Spacing */}
          <div id="spacing" className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Spacing</h3>
            <Card>
              <CardHeader>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Spacing Scale</h4>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {spacingTokens.map((space) => (
                    <div key={space} className="flex items-center gap-4">
                      <span className="text-sm text-gray-600 dark:text-gray-400 font-mono w-12">
                        {space}
                      </span>
                      <div className={`bg-blue-200 dark:bg-blue-800 h-4 w-${space === '0' ? '0' : space}`} />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {space === '0' ? '0px' : `${parseInt(space) * 4}px`}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Usage Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Component Architecture</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• All components use TypeScript for type safety</li>
                  <li>• Built with Tailwind CSS for consistent styling</li>
                  <li>• Support for light and dark themes</li>
                  <li>• Flexible props for customization</li>
                  <li>• Accessible by default with ARIA attributes</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Design Principles</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Consistency across all components</li>
                  <li>• Responsive design for all screen sizes</li>
                  <li>• Performance-optimized implementations</li>
                  <li>• Intuitive and predictable interactions</li>
                  <li>• Minimal and clean visual design</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Use this design system as the foundation for your next project. All components are 
            production-ready and fully customizable.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://github.com/mirkotrotta/moon-site/fork"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Fork Repository
            </a>
            <a
              href="https://github.com/mirkotrotta/moon-site/archive/refs/heads/main.zip"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Download ZIP
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
} 